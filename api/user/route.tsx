import clientPrisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// import { PrismaClient as prisma } from "@prisma/client";



export async function GET(request:NextRequest) { 
  try {
    const user:any = await clientPrisma.user.findMany();
    // console.log(user);
     return NextResponse.json({
         ok: true,
         user: user,
         message: "Hello user",
       });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      user: null,
      message: "No user found",
    });
  }

}