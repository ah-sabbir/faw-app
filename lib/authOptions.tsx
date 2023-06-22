import NextAuthOptions from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

type NextAuthOptions = /*unresolved*/ any

export const Options:NextAuthOptions = {
    session: {
        jwt: true,
      },
      providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            email: { label: "Email", type: "text", placeholder: "example@domain.com" },
            password: { label: "Password", type: "password", placeholder: "Password" }
          },
          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const res = await fetch("/api/auth/login", {
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
              console.log(user);
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null // Redirect to error page
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
              throw new Error('error message') // Redirect to error page
              
            }
          }
        }),
        
      ],
      pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
        error: "/auth/error", // Error code passed in query string as ?error=
        verifyRequest: "/auth/verify-request", // (used for check email message)
      },
      callbacks: {
        async jwt({ token, user }: { token: any; user: any }) {
          return { ...token, ...user };
        },
        async session({ session, token, user }: { session: any; token: any; user: any }) {
          session.user = token;
          return session;
        },
      },      
    }