import prisma from '@/app/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request:Request) { 
   
  try {

   const users = await prisma.user.findMany({
        select:{
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            role: true
        }
   });

    return NextResponse.json({ ok: true, data: users });

  } catch (error) {
    return NextResponse.json({ ok: false, message: "Something want wrong." });
  }

}
