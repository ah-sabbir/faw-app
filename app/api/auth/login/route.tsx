import prisma from '@/app/lib/prisma';
import bcrypt from "bcryptjs";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from 'next/server';

const bcryptP:any = bcrypt;

export async function POST(request:NextRequest) { 
    const data:user_login = await request.json()
    
    // check if all the fields are provided
    if(!data.email || !data.password){
        return NextResponse.json({
            ok: false,
            message: "Please provide all the required fields",
          });
    }

      // Find user by email
  const user:any = await prisma.user.findUnique({
    where:{
        email:data.email
    }
  });

  if(!user){
    return NextResponse.json({
        ok: false,
        message: "User not found",
      });
  }

    // Compare password
    const match = await bcrypt.compare(data.password, user.password);

    if (!match) {
        return NextResponse.json({
            ok: false,
            message: "Invalid email or password",
          });
      }

      // console.log("check", user);

    // Generate JWT Token and confirm login
    // const secret = process.env.NEXTAUTH_SECRET;
    
    // const token:any = await jwt.sign({
    //   // The user data that you want to include in the JWT token
    //   user: {
    //     name:"sabbir",
    //     email:"a@gmail.com"
    //   },
    //   // The expiration time for the JWT token
    //   expiresIn: 60 * 60 * 24, // 1 day
    // }, secret);

    // console.log(token);


    // const token = await getToken({ request })
    // const token = await getToken({ req: request, secret: process.env.JWT_SECRET });


    const secret = process.env.JWT_SECRET;
    const userd = {
      id: 1,
      email: "johndoe@example.com",
    };

    const token = await getToken({req: request, secret});

    return NextResponse.json({
        ok: true,
        token,
      });
}





