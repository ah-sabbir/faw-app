import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request:NextRequest) { 
    const {slug} = await request.json()

    const posts = await prisma.blogPost.findUnique({
        where: {
          slug: slug
        }
      });

      if(posts){ return NextResponse.json({ok:true, message:"already exist"});}
      else{ return NextResponse.json({ok:false, message:"doesn't exist"});}
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