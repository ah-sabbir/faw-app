import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";
import { authConfig } from "@/lib/auth";
import GetPostBySlug from "@/lib/blogPost/getPostBySlug";
import database from "@/lib/prisma";


export async function GET(request: Request){
    try {
        const session = await getServerSession(authConfig);
        //console.log("All Blogs Api Session :",session)

        const posts = await database.Post.findMany();

        return NextResponse.json({ok: true, posts: posts})
    } catch (error) {
        console.log("api/slug/route.tsx error",error);
	return NextResponse.json({ok:false, posts: "There's No Post"})
    }

    // console.log("api/slug/route.tsx", res, slug);

    return NextResponse.json({ok: true})
}