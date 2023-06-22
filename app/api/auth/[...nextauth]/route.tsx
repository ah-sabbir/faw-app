// import bcrypt from "bcryptjs";
import { Options } from "@/lib/authOptions";
import NextAuth from "next-auth/next";

<<<<<<< HEAD

const handler=NextAuth(Options);
=======
const handler=NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Email", type: "text", placeholder: "Username / Email" },
        password: { label: "Password", type: "password", placeholder: "Password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", email: "a@gmail.com", password: "123" };
        // const res = await fetch("http://localhost:3000/api/auth/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     username: credentials?.username,
        //     password: credentials?.password,
        //   }),
        // });
        // const user = await res.json();

        if (credentials?.username == user.email && credentials.password == user.password) {
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
  callbacks: {
    async jwt( { token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
});
>>>>>>> 06af0c5b28e65a7c3a86983a23466ad83d7c8dab

export { handler as GET, handler as POST };
