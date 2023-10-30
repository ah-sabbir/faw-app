// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from "next-auth/jwt";
import { NextResponse } from 'next/server';


import bcrypt from "bcryptjs";
import clientPrisma from '@/lib/prisma';

const secret = process.env.NEXTAUTH_SECRET

type Data = {
  name: string
}

interface UserRequest {
  email: string;
  password: string;
}

export async function POST(request:Request) {
      const body:UserRequest = await request.json();

      const user:any = await clientPrisma.user.findFirst({
        where: {
          email: body.email,
        },
      });

      if(!user){
        return NextResponse.json({ ok: false, msg: "Invalid email or user not register yet" });
      }

      if(user && (await bcrypt.compare(body.password,user.password)) ){
        const { password, ...rest } = user;
        // const token = await getToken()
        // console.log(token);
        return NextResponse.json({ ok: true, user: rest });
      }else{
        return NextResponse.json({ ok: false, msg: "Invalid credentials" });
      }
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }