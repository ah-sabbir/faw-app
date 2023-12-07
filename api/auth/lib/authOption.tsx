import NextAuth, {type NextAuthOptions} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import database from '@/lib/prisma';
import { compare } from 'bcrypt';


export const Options: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials:{
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "admin@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                },
            },
            async authorize(credentials:any){
                if(!credentials?.email || !credentials?.password){
                    return null as any;
                }

                const {hashedPassword, ...user} = await database.User.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if(!user){
                    return null as any;
                }

                const isPasswordValid = await compare(credentials.password, hashedPassword);

                if(!isPasswordValid){
                    console.log("isPasswordValid is false");
                    return null as any;
                }

                // const {hashedPassword, ...userWithoutPass} = user
                // console.log(user)

                return user;
            }
        }),
    ],

    callbacks: {
        session: async ({session, token}) => {
            // console.log(session, user);
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                },
            };
        },

        jwt: async ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    first_name: u.first_name,
                    last_name: u.last_name,
                    email: u.email,
                    image: u.image,
                    role: u.role,
                    iat: Math.floor(Date.now() / 1000),
                    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
                }
            }
            return token;
        }
    }
}