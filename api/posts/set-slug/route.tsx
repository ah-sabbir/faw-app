// create post
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// write a interface for blog post
interface slug {
  title: string;
  postId: string;
}

export async function POST(request:NextRequest) {
  const post:slug = await request.json()

  try{

    const blogPost  = await prisma.blogPost.update({
        where: {
            id: post.postId,
        },
        data: {
            slug: post.title.toLowerCase().split(' ').join('-')
        },
    })

    return NextResponse.json({ ok:200, msg:"Updated successfully",  post: blogPost });
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