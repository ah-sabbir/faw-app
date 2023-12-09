import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";

import database from "./prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import getUserByEmail from "./userInfo/getUserByEmail";

export const authConfig: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID as string,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID as string,
        clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
        name: 'Credentials',
        credentials:{
            email: { label: "Email", type: "email", placeholder: "admin@example.com" },
            password: { abel: "Password", type: "password", placeholder: "********" },
        },
        async authorize(credentials: any, req: any){
            if(!credentials?.email || !credentials?.password){
                throw new Error("Invalid username or password") as any;
            }
            
            
            // check if the user exists
            const user = await database.User.findUnique({
                where: {
                    email: credentials.email
                }
            });

            if(!user){
                throw new Error("Invalid User") as any;
            }

            // check if the password is valid
            const {hashedPassword, ...rest} = user;

            const isPasswordValid = await compare(credentials.password, hashedPassword);

            if(!isPasswordValid){
                // console.log("isPasswordValid is false");
                throw new Error("Invalid password") as any;
            }

            // const {hashedPassword, ...userWithoutPass} = user
            // console.log(user)

            return user;

        }
    }),
  ],
    pages: {
        signIn: "/access",
        error: "/access",
    },
    callbacks: {
        async session({session}){
            // console.log("session callback",{ session})
            // const userInfo = await getUserByEmail(session?.user?.email as string);
            // check if the user exists
            const {hashedPassword, ...user} = await database.User.findUnique({
                where: {
                    email: session?.user?.email
                }
            });
            session.user = user;
            return session;
        },
        async jwt({token, user}){
            // console.log("jwt callback",{token, user})
            if(user){
                token.id = user.id;
            }
            return token;
        }
    },
  secret: process.env.SECRET,
  session: {
      strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
}

// export function LoginIsRequiredClient() {
//     'use client'
//   if (typeof window !== "undefined") {
//     const session = useSession();
//     const router = useRouter();
//     if (!session) router.push("/");
//   }
// }



// login on serverside with next.js 13 using next-auth