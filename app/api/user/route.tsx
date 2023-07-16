import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';



export async function GET(request:NextRequest) { 
   const user:any = await prisma.user.findMany();
    return NextResponse.json({
        ok: true,
        user: user,
        message: "Hello user",
      });
}