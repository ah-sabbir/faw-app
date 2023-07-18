import prisma from '@/lib/prisma';
// create post
import { NextRequest, NextResponse } from 'next/server';

// write a interface for blog post
interface Post {
  title: string
  content: string
  published?: boolean
  tagId: string
  userId: string
  slug?: string
}

export async function POST(request:NextRequest) {
  const data:Post = await request.json()

  try{

    const user = await prisma.user.findUnique({
      where: {
        email: "demo@gmail.com"
      }
    })

    const blogPost  = await prisma.blogPost.create({
      data: {
        title: data.title,
        content: data.content,
        tagId: data.tagId,
        userId: user?.id,
        slug: "string"
      },
    })

    return NextResponse.json({ ok:true, msg:"post created successfully" });
  }catch(err){
    console.log(err);
    return NextResponse.json({ ok:400, msg:"post created failed" });
  }
}
// update post
// delete post
 
// export async function GET() { 
//   return NextResponse.json({ ok:200, msg:"from here user can make a post of their own products" });
// }