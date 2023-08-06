// import bcrypt from "bcryptjs";
import { Options } from '@/lib/authOptions';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

// ! 
// ? 
// * 

// export const authOptions = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET
//         })
//     ],
//     pages: '/signin'
// }


const handler=NextAuth(Options);

export { handler as GET, handler as POST };
