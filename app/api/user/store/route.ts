import prisma from '@/app/lib/prisma';
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from 'next/server';

const bcryptP:any = bcrypt;

export async function POST(request:NextRequest) { 
   const {firstname, lastname, email, phone, password} = await request.json()

  // checking if all fields are entered
  console.log(firstname, lastname, email, phone, password)
  if (!firstname || !lastname || !email || !password) {
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
        firstName: firstname,
        lastName: lastname,
        email : email,
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
