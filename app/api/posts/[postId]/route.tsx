import { NextRequest, NextResponse } from 'next/server';
 
export async function GET(req: NextRequest, res: NextResponse) { 

    const { searchParams } = new URL(req.nextUrl);

    const postId: any = searchParams.get("postId")

    console.log(req.nextUrl);
    
  return NextResponse.json({ ok:200, msg: `this is ${searchParams} post information where user can see, edit, update, delete their post by id` });
}