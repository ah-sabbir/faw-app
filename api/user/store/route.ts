import prisma from '@/lib/prisma';
import { genSaltSync, hash } from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

interface User{
  firstName:string,
  lastName:string,
  email:string,
  password:string
}


export async function POST(request:NextRequest) { 
   const data:User = await request.json()



  // checking if all fields are entered
  if (!data.firstName || !data.email || !data.password) {
    console.log(data)
    return NextResponse.json({
      ok: false,
      fieldsmissing: true,
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
      const salt = genSaltSync(12);

          
      const hashedPassword = await hash(data.password, salt);
      // creating user
      const User = await prisma.user.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email : data.email,
          password: hashedPassword,
        },
      });

      return NextResponse.json({ ok: true, message: "Successfully registered." });

    }

  } catch (error) {
    console.log(error);
    return NextResponse.json({ ok: false, message: "Something want wrong." });
  }
}
