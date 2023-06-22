// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

import bcrypt from "bcryptjs";

interface CreateUserRequest {
    firstname:string,
    lastname:string,
    email:string,
    phone:string,
    avatar:string,
    country:string,
    city:string,
    password:string,
}

export async function POST(request:Request) {
      const body:CreateUserRequest = await request.json();

      try{
        const IsUserExist = await prisma.user.findUnique({
            where: {
              email: body.email,
            },
          });
          if (IsUserExist) {
            return NextResponse.json({ ok:400, msg:"user already exist" });
          }else{
            const user:any = await prisma.user.create({
                data: {
                    firstname:body.firstname,
                    lastname:body.lastname,
                    email:body.email,
                    phone:body.phone,
                    avatar:body.avatar,
                    country:body.country,
                    city:body.city,
                    password: await bcrypt.hash(body.password, 10)
                },
              });
        
                const { password, ...userWithoutPassword } = user;
        
                return NextResponse.json({ ok:200, msg:"user created successfully", user:userWithoutPassword });
          }
        }catch(err){
            return NextResponse.json({ ok:400, msg:"something went wrong" });
        }
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }