import prisma from '@/app/lib/prisma';
import bcrypt from "bcryptjs";
import { NextResponse } from 'next/server';

const bcryptP:any = bcrypt;

export async function POST(request:Request) { 
   const {firstName, lastName, email, phone, password} = await request.json()

  // checking if all fields are entered
  if (!firstName || !email || !email || !password) {
    return NextResponse.json({
      ok: false,
      message: "Please provide all the required fields",
    });
  }

  try {
    // checking user exist or not
    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return NextResponse.json({ ok: false, message: "User already exists" });
    }

    // password converting normal to hash
    const salt = bcryptP.genSaltSync(10);
    const hashedPassword = await bcryptP.hash(password, salt);
     
    // creating user
    const User = await prisma.user.create({
      data: {
        firstName, 
        lastName, 
        email,
        password: hashedPassword,
        phone,
        role: "blogger"
      },
    });

    return NextResponse.json({ ok: true, message: "Successfully registered." });

  } catch (error) {
    return NextResponse.json({ ok: false, message: "Something want wrong." });
  }

}
