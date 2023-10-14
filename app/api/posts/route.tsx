import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// import { PrismaClient as prisma } from "@prisma/client";

// a.toLowerCase().replace(/ /g, '-')
//         .replace(/[^\w-]+/g, '');

export async function GET(req: NextRequest, res: NextResponse) { 

  const { searchParams } = new URL(req.nextUrl);
  const slug: any = searchParams.get("slug")

  if(slug){
    return NextResponse.json({
      ok: true,
      message: "updated",
      post: slug,
    });
  }




   const posts:any = await prisma.blogPost.findMany();
  
  //  for (const Spost of posts) {
  //   const newSlug = Spost.title.toLowerCase().replace(/\s+/g, '-');

  //   const post = await prisma.blogPost.findUnique({
  //     where: {
  //       id: Spost.id,
  //     },
  //   });
    
  //   if (post) {
  //     await prisma.post.update({
  //       where: {
  //         id: Spost.id,
  //       },
  //       data: {
  //         slug: newSlug,
  //       },
  //     });
  //   } else {
  //     console.log("post not found")
  //   }


  // }

    return NextResponse.json({
        ok: true,
        message: "updated",
        posts:[...posts],
      });
}




// export async function getPosts(req, res) {
//   // Get all posts from Prisma
// }

// export async function getPostById(req, res) {
//   // Get a post by its ID from Prisma
// }

// export async function createPost(req, res) {
//   // Create a new post in Prisma
// }

// export async function updatePost(req, res) {
//   // Update a post in Prisma
// }

// export async function deletePost(req, res) {
//   // Delete a post from Prisma
// }