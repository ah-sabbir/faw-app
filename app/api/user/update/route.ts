import prisma from '@/lib/prisma';
import bcrypt from "bcryptjs";
import { NextResponse } from 'next/server';

const bcryptP:any = bcrypt;

export async function PUT(request:Request) { 
   const {id, firstname, lastname, email, phone, password, role} = await request.json()

  // checking if all fields are entered
  if (!id || !firstname || !email || !email) {
    return NextResponse.json({
      ok: false,
      message: "Please provide all the required fields",
    });
  }

  try {
    let hashedPassword = undefined ;
    if (password){
      const salt = bcryptP.genSaltSync(10);
      hashedPassword = await bcryptP.hash(password, salt);
    }

    await prisma.user.update({
      where: {
        id,
      },
      data: {
        firstname: firstname ? firstname : undefined, 
        lastname: lastname ? lastname : undefined, 
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
