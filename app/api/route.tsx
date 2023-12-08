import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "@/lib/auth";


export async function GET(request:Request){
    const session = await getServerSession(authConfig);
    console.log('GET API',session);
    return NextResponse.json({authenticated: !!session})
}