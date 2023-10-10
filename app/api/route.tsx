import { NextRequest, NextResponse } from 'next/server';
import getToken from './getToken';

// import { PrismaClient as prisma } from "@prisma/client";





export async function GET(request:NextRequest) { 
    const token:any = await getToken(NextRequest, NextResponse )
    console.log(token)
//    const user:any = await prisma.user.findMany();
    return NextResponse.json({
        ok: true,
        token: token,
        message: "Hello user",
      });
}