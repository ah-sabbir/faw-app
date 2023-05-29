import prisma from '@/app/lib/prisma';
// import bcrypt from "bcryptjs";
import { NextResponse } from 'next/server';

export async function POST(request: Request) { 
  const data: user_data[] = await request.json();
  // const {firstname, lastname, email, phone} = await request.json();

  const {firstname, lastname, email,aboutUser, password, phone,profileImage, country, city } = data[0];

  // checking if all fields are entered
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
    // const salt = bcrypt.genSaltSync(10);
    // const hashedPassword = await bcrypt.hash(password, salt);
     
    // creating user
    const User = await prisma.user.create({
      data: {
        firstname, 
        lastname, 
        email,
        aboutUser,
        password: password,
        phone,
        profileImage,
        country,
        city,
        role: "blogger"
      },
    });

    return NextResponse.json({ ok: true, message: "Successfully registered." });

  } catch (error) {
    return NextResponse.json({ ok: false, message: "Something want wrong." });
  }


  return NextResponse.json({firstname:firstname, lastname:lastname, email:email});
}
