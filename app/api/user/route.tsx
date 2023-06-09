import prisma from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';



export async function GET(request:NextRequest) { 
   const user:any = await prisma.user.findMany();
    return NextResponse.json({
        ok: false,
        user
      });
}