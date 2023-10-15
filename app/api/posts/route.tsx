import clientPrisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// a.toLowerCase().replace(/ /g, '-')
//         .replace(/[^\w-]+/g, '');

export async function GET(req: NextRequest, res: NextResponse) { 

  const { searchParams } = new URL(req.nextUrl);
  
  const slug: any = searchParams.get("slug") || null;


   if(slug){
      const posts:any = await clientPrisma.blogPost.findUnique ({
        where: {
          slug: slug,
        }});
        if(posts){
            return NextResponse.json({
              ok: true,
              message: "updated",
              posts:[...posts],
            });
        }else{
            return NextResponse.json({
              ok: false,
              message: "not found",
            });
        }
   }else{
    const posts:any = await clientPrisma.blogPost.findMany();
    return NextResponse.json({
      ok: true,
      message: "updated-all",
      posts:[...posts],
    });
   }
  
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


}


export async function DELETE(req: Request, res: NextResponse) {
  const {slug} = await req.json();

  try {
    if(slug){
      const rest = await clientPrisma.blogPost.delete({
          where: {
              slug: slug,
          },
          });
    }

  return NextResponse.json({
    ok: true,
    message: "Deleted"
  });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      message: error
    });
  }

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