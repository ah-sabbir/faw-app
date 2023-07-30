import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// import { PrismaClient as prisma } from "@prisma/client";



export async function GET(request:NextRequest) { 
   const tags:any = await prisma.Tag.findMany();
    return NextResponse.json({
        ok: true,
        message: "Post are ready",
        ...tags
      });
}