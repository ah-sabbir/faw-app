import prisma from '@/app/lib/prisma';
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from 'next/server';

const bcryptP:any = bcrypt;

export async function POST(request:NextRequest) { 
   const data:user_data = await request.json()

  // checking if all fields are entered
  if (!data.firstname || !data.email || !data.password) {
    console.log(data)
    return NextResponse.json({
      ok: false,
      // data: data,
      message: "Please provide all the required fields",
    });
  }

  try {
    // checking user exist or not
    const userExists: any = await prisma.user.findUnique({
      where: {
        email: data.email
      },
    });

    
    if (userExists) {
      return NextResponse.json({ ok: false, message: "User already exists" });
    }else{

      // password converting normal to hash
      const salt = bcryptP.genSaltSync(10);

          
      const hashedPassword = await bcryptP.hash(data.password, salt);

      // creating user
      const User = await prisma.user.create({
        data: {
          firstName: data.firstname,
          lastName: data.lastname,
          email : data.email,
          password: hashedPassword,
          phone: data.phone,
          avatar: data.avatar?data.avatar:"",
          country: data.country?data.country:"",
          city: data.city?data.city:"",
          role: "seller"
        },
      });

      return NextResponse.json({ ok: true, message: "Successfully registered." });

    }

  } catch (error) {
    return NextResponse.json({ ok: false, message: "Something want wrong." });
  }

}
