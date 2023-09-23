// create post
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// write a interface for blog post
interface Post {
  title: string;
  content: string;
  published: boolean;
  userId: string;
  categories: [];
  tagId: any;
  email: string;
  slug: string;
}

export async function POST(request:NextRequest) {
  const post:Post = await request.json()

  try{

    const slug = post.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
    // find slug in the database and if it exist add a number to it
    const slugExist = await prisma.blogPost.findFirst({
      where: {
        slug: slug
      }
    });
    console.log(slugExist);

    if(slugExist){
      return NextResponse.json({ ok:400, msg:"The title already exist please change it thanks" });
    }


    const blogPost  = await prisma.blogPost.create({
      data: {
        title: post.title,
        content: post.content,
        categories: post.categories,
        tagId: post.tagId,
        userId: post.userId,
        slug: post.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
      },
    })

    return NextResponse.json({ ok:200, msg:"post created successfully",  post: blogPost });
  }catch(err){
    console.log(err);
    return NextResponse.json({ ok:400, msg: err});
  }
}
// update post
// delete post
 
// export async function GET() { 
//   return NextResponse.json({ ok:200, msg:"from here user can make a post of their own products" });
// }