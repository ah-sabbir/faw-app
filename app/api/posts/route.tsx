import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// import { PrismaClient as prisma } from "@prisma/client";



export async function GET(request:NextRequest) { 
   const posts:any = await prisma.blogPost.findMany();
    return NextResponse.json({
        ok: true,
        message: "Post are ready",
        ...posts
      });
}