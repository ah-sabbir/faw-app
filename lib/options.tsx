// import Credentials from "next-auth/providers/credentials";

// export const authOptions = {
//     providers: [
//         Credentials({
//             name: "Credentials",
//             credentials: {
//                 username: { label: "Email", type: "text", placeholder: "Username / Email" },
//                 password: { label: "Password", type: "password", placeholder: "Password" }
//             },
//             async authorize(credentials, req) {
//                 // Add logic here to look up the user from the credentials supplied
//                 const res = await fetch("http://localhost:3000/api/auth/login", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         username: credentials?.username,
//                         password: credentials?.password,
//                     }),
//                 });
//                 const user = await res.json();
//                 if (user) {
//                     // Any object returned will be saved in `user` property of the JWT
//                     return user
//                 } else {
//                     // If you return null then an error will be displayed advising the user to check their details.
//                     return new Error('Invalid Username / Password') // Redirect to error page

//                     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//                     // throw new Error('error message') // Redirect to error page

//                 }
//             },
//         }),
//         // ...add more providers here
//     ],
//     callbacks: {
//         async jwt({ token, user }) {
//             return { ...token, ...user };
//         },
//         async session({ session, token, user }) {
//             session.user = token as any;
//             return session;
//         },
//     },
// }
