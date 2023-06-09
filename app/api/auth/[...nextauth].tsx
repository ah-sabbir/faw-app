// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from 'next-auth/providers/credentials';


// const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       type: "credentials",
//       credentials: {
//       },
//       async authorize(credentials, req) {
//         const {email, password} = credentials as {
//             email: string,
//             password: string
//         }
//         // This function is called when a user tries to sign in with credentials.
//         // You can use the `credentials` object to get the user's email and password.
//         // You can also use the `req` object to get information about the request, such as the user's IP address.

//         // Check the user's credentials against a database.
//         // If the user's credentials are correct, return `true`.
//         // Otherwise, return `false`.

//         // Example:
//         const user = await prisma?.user.findUnique({where:{email:credentials.email}});
//         if (user && user.password === credentials.password) {
//           return true;
//         } else {
//           return false;
//         }
//       },
//     }),
//   ],
// };

// export default NextAuth(authOptions);