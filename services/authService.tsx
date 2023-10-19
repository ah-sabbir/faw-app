import { NextResponse } from 'next/server';


import bcrypt from "bcryptjs";
import clientPrisma from '@/lib/prisma';

const secret = process.env.NEXTAUTH_SECRET

const authenticate = async (email: string, password: string) => {

    const user:any = await clientPrisma.user.findFirst({
        where: {
          email: email,
        },
      });

    if(user && (await bcrypt.compare(password,user.password)) ){
        const { password, ...rest } = user;
        return rest;
    }else{
        return null;
    }
}


export default authenticate;
