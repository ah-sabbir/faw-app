import prisma from '@/app/lib/prisma';
import bcrypt from "bcrypt";
import { NextResponse, NextRequest } from 'next/server';


export async function PUT(request:Request) { 
   const {id, firstName, lastName, email, phone, password, role} = await request.json()

  // checking if all fields are entered
  if (!id || !firstName || !email || !email) {
    return NextResponse.json({
      ok: false,
      message: "Please provide all the required fields",
    });
  }

  try {
    let hashedPassword = undefined ;
    if (password){
      const salt = bcrypt.genSaltSync(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    await prisma.user.update({
      where: {
        id,
      },
      data: {
        firstName: firstName ? firstName : undefined, 
        lastName: lastName ? lastName : undefined, 
        email,
        password: hashedPassword,
        phone,
        role: role ? role : undefined
      }
    });

    return NextResponse.json({ ok: true, message: "Successfully updated." });

  } catch (error) {
    return NextResponse.json({ ok: false, message: error });
  }

}
