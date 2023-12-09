import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";
import { authConfig } from "@/lib/auth";
import GetPostBySlug from "@/lib/blogPost/getPostBySlug";


export async function POST(request: Request){
    const data = await request.json();
    const {slug } = data as {slug: string, user_id: string};
    const res = await GetPostBySlug(slug);

    // console.log("api/slug/route.tsx", res, slug);

    return NextResponse.json({...res, slug: slug})
}