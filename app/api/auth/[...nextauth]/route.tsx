// import bcrypt from "bcryptjs";
import { Options } from "@/lib/auth";
import NextAuth from "next-auth/next";


const handler=NextAuth(Options);

export { handler as GET, handler as POST };

