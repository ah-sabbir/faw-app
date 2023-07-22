import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { NextAuthOptions } from "next-auth"
// import EmailProvider from "next-auth/providers/email"
// import GitHubProvider from "next-auth/providers/github"

import prisma from '@/lib/prisma';
import NextAuthOptions from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

type NextAuthOptions = /*unresolved*/ any

const NEXTAUTH_URL = process.env.NEXTAUTH_URL || "http://localhost:3000";

export const Options:NextAuthOptions = {
    session: {
        jwt: true,
      },
      adapter: PrismaAdapter(prisma as any),
      pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
        // error: "/auth/error", // Error code passed in query string as ?error=
        // verifyRequest: "/auth/verify-request", // (used for check email message)
      },
      providers: [
        // GoogleProvider is an OAuth authentication provider which supports OAuth 2.0
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        // OAuth authentication providers...
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "text", placeholder: "example@domain.com" },
            password: { label: "Password", type: "password", placeholder: "Password" }
          },
          async authorize(credentials, req) {
            try{
                // Add logic here to look up the user from the credentials supplied
                const res = await fetch(NEXTAUTH_URL+"/api/auth/login", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    email: credentials?.email,
                    password: credentials?.password,
                    }),
                });
                const user = await res.json();
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    // console.log(user);
                    return user
                }
            }catch(e){
                return null;
            }

          }
        }),
      ],
    callbacks: {
          async session({ token, session }: any) {
            if (token) {
              session.user.id = token.id
              session.user.name = token.name
              session.user.email = token.email
              session.user.image = token.picture
            }

            return session
          },
          async jwt({ token, user }: any) {
            const dbUser = await prisma.user.findFirst({
              where: {
                email: token.email,
              },
            })

            if (!dbUser) {
              if (user) {
                token.id = user?.id
              }
              return token
            }

            return {
              id: dbUser.id,
              name: dbUser.name,
              email: dbUser.email,
              picture: dbUser.image,
            }
          },
      },      
    }