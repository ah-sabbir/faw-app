// import bcrypt from "bcryptjs";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

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
        username: { label: "Username", type: "text", placeholder: "Username / Email" },
        password: { label: "Password", type: "password", placeholder: "Password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const res = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
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

export { handler as GET, handler as POST };

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "Credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "Username / Email" },
//         password: { label: "Password", type: "password", placeholder: "Password" }
//       },
//       async authorize(credentials, req) {
//         // Add logic here to look up the user from the credentials supplied
//         const res = await fetch("http://localhost:3000/api/auth/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             username: credentials?.username,
//             password: credentials?.password,
//           }),
//         });
//         const user = await res.json();

  
//         if (user) {
//           // Any object returned will be saved in `user` property of the JWT
//           return user
//         } else {
//           // If you return null then an error will be displayed advising the user to check their details.
//           return new Error('Invalid Username / Password') // Redirect to error page
  
//           // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//           // throw new Error('error message') // Redirect to error page
          
//         }
//       }
//     })
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       return { ...token, ...user };
//     },
//     async session({ session, token, user }) {
//       session.user = token as any;
//       return session;
//     },
//   },
// });





          // if (!userExist) return null;

          // const passwordMatch:Boolean = await bcrypt.compare(
          //   credentials.password,
          //   userExist.password
          // );
          // if (!passwordMatch) return null;

          // const user = {
          //   id: userExist.id,
          //   username: userExist.username,
          //   email: userExist.email,
          //   role: userExist.role,
          // };
          // return user;
        // const user = {
        //   username: credentials?.username,
        //   password: credentials?.password,
        // }