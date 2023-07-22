import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// get all posts

export async function GET(req: NextRequest, res: NextResponse) { 

    const posts = await prisma?.blogPost.findMany()

  return NextResponse.json({ ok:200, msg: posts});
}