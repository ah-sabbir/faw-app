import NextAuthOptions from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import authenticate from "@/services/authService";
import { AuthOptions } from "next-auth";
import { randomBytes, randomUUID } from "crypto";

type NextAuthOptions = /*unresolved*/ any

const NEXTAUTH_URL = process.env.NEXTAUTH_URL || "http://localhost:3000";

// export const Options:NextAuthOptions = {
//     session: {
//         jwt: true,
//         maxAge: 30 * 24 * 60 * 60, // 30 days
        
//       },
//       providers: [
//         CredentialsProvider({
//           // The name to display on the sign in form (e.g. "Sign in with...")
//           name: "Credentials",
//           // `credentials` is used to generate a form on the sign in page.
//           // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//           // e.g. domain, username, password, 2FA token, etc.
//           // You can pass any HTML attribute to the <input> tag through the object.
//           credentials: {
//             email: { label: "Email", type: "text", placeholder: "example@domain.com" },
//             password: { label: "Password", type: "password", placeholder: "Password" }
//           },
//           async authorize(credentials, req) {

//             try{
//                 // Add logic here to look up the user from the credentials supplied
//                 const res = await fetch(NEXTAUTH_URL+"/api/auth/login", {
//                     method: "POST",
//                     headers: {
//                     "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                     email: credentials?.email,
//                     password: credentials?.password,
//                     }),
//                 });
//                 const user = await res.json();
        
//                 if (user) {
//                     // Any object returned will be saved in `user` property of the JWT
//                     // console.log(user);
//                     return user
//                 }
//             }catch(e){
//                 return null;
//             }

//           }
//         }),
        
//       ],
//       pages: {
//         signIn: "/auth/signin",
//         signOut: "/auth/signout",
//         // error: "/auth/error", // Error code passed in query string as ?error=
//         // verifyRequest: "/auth/verify-request", // (used for check email message)
//       },
//       callbacks: {
//         async jwt({ token, user }: { token: any; user: any }) {
//           return { ...token, ...user };
//         }
//       }
//       //   async session({ session, token, user }: { session: any; token: any; user: any }) {
//       //     session.user = token;
//       //     return session;
//       //   },
//       // },      
//     }


    export const Options: AuthOptions = {
      providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" }
          },
          async authorize (credentials, req) {
            if (typeof credentials !== "undefined") {
              const res = await authenticate(credentials.email, credentials.password)
              // console.log("this is authoptions.tsx ", res)
              if (res.ok) {
                return { ...res.user, email: credentials.email }
              } else {
                return null
              }
            } else {
              return null
            }
          }
        })
      ],
      callbacks: {
        async jwt({ user, token }){
          console.log("jwt callback", user);
          if (user) {
            token.accessToken = token.access_token
            token.id = user.id
          }
          return {...token, ...user}
        },

        async session({ session, token }) {
          if (session?.user) {
            session.user = token;
          }
          return session;
        },
      },
      // session: {
      //   // Choose how you want to save the user session.
      //   // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
      //   // If you use an `adapter` however, we default it to `"database"` instead.
      //   // You can still force a JWT session by explicitly defining `"jwt"`.
      //   // When using `"database"`, the session cookie will only contain a `sessionToken` value,
      //   // which is used to look up the session in the database.
      //   strategy: "jwt",
      
      //   // Seconds - How long until an idle session expires and is no longer valid.
      //   maxAge: 30 * 24 * 60 * 60, // 30 days
      
      //   // Seconds - Throttle how frequently to write to database to extend a session.
      //   // Use it to limit write operations. Set to 0 to always update the database.
      //   // Note: This option is ignored if using JSON Web Tokens
      //   updateAge: 24 * 60 * 60, // 24 hours
        
      //   // The session token is usually either a random UUID or string, however if you
      //   // need a more customized session token string, you can define your own generate function.
      //   generateSessionToken: () => {
      //     return randomUUID?.() ?? randomBytes(32).toString("hex")
      //   }
      // }
      secret: process.env.SECRET
    }