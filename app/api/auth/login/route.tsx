// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

import bcrypt from "bcryptjs";

type Data = {
  name: string
}

interface UserRequest {
  email: string;
  password: string;
}

export async function POST(request:Request) {
      const body:UserRequest = await request.json();

      const user:any = await prisma.user.findFirst({
        where: {
          email: body.email,
        },
      });

      if(user && (await bcrypt.compare(body.password,user.password)) ){
        const { password, ...rest } = user;
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