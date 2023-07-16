import { NextRequest, NextResponse } from 'next/server';



// create post

// get all post
// get post by id
// update post
// delete post
// get post by category
// get post by tag
// get post by author
// get post by date
// get post by search
// get post by slug
// get post by status
// get post by comment
// get post by comment status
// get post by comment author
// get post by comment date
// get post by comment search

 
export async function GET(req: NextRequest, res: NextResponse) { 

    const { searchParams } = new URL(req.nextUrl);

    const postId: any = searchParams.get("postId")

    console.log(req.nextUrl);
    
  return NextResponse.json({ ok:200, msg: `this is ${searchParams} post information where user can see, edit, update, delete their post by id` });
}