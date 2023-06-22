// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

<<<<<<< HEAD
import bcrypt from "bcryptjs";

type Data = {
  name: string
}

interface UserRequest {
  email: string;
  password: string;
=======
const bcryptP:any = bcrypt;

export async function POST(request:Request) { 
   const data:any = await request.json()

  // checking if all fields are entered
//   console.log(data);
  
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: data?.email,
            },
            });
            console.log(user);
            if (!user) {
                return NextResponse.json({
                ok: false,
                message: "incorrect user or password",
                });
            }
            const passwordMatch:any = await bcrypt.compare(
                data?.password || "",
                user?.password || ""
            );
            if (!passwordMatch) {
                return NextResponse.json({
                ok: false,
                message: "incorrect user or password",
                });
            }

        return NextResponse.json({ ok: true, user: user });

    } catch (error) {
        return NextResponse.json({ ok: false, message: error });
    }
>>>>>>> 06af0c5b28e65a7c3a86983a23466ad83d7c8dab
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