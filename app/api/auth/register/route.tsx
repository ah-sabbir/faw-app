// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

import bcrypt from "bcryptjs";
import clientPrisma from '@/lib/prisma';

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
      const {first_name, last_name, email, password} = await request.json();
      const body:CreateUserRequest = {
        firstname:first_name,
        lastname:last_name,
        email:email,
        phone: "Phone" + Math.random().toString(16).slice(2),
        avatar:"",
        country:"",
        city:"",
        password:password
      }

      try{
        const IsUserExist = await clientPrisma.user.findUnique({
            where: {
              email: email,
            },
          });
          if (IsUserExist) {
            return NextResponse.json({ ok:false, msg:"user already exist" });
          }else{
            const user:any = await clientPrisma.user.create({
                data: {
                    firstName:body.firstname,
                    lastName:body.lastname,
                    email:body.email,
                    phone:body.phone,
                    avatar:body.avatar,
                    country:body.country,
                    city:body.city,
                    password: await bcrypt.hash(body.password, 10)
                },
              });
        
                const { password, ...userWithoutPassword } = user;
        
                return NextResponse.json({ ok:true, msg:"user created successfully", user:userWithoutPassword });
          }
        }catch(err){
          console.log(err)
            return NextResponse.json({ ok:false, msg:"Something went wrong. Please check into the API Backend" });
        }
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }