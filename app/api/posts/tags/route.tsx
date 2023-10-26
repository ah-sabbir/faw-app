import clientPrisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// import { PrismaClient as prisma } from "@prisma/client";



export async function GET(request:NextRequest) { 
  try {
    const tags:any = await clientPrisma.Tag.findMany();
    return NextResponse.json({
        ok: true,
        message: "Post are ready",
        ...tags
      });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      message: "Post are ready",
      error: error
    });
  }

}