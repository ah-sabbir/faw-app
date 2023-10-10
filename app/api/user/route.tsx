import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// import { PrismaClient as prisma } from "@prisma/client";



export async function GET(request:NextRequest) { 
   const user:any = await prisma.user.findMany();
   console.log(user);
    return NextResponse.json({
        ok: true,
        user: user,
        message: "Hello user",
      });
}