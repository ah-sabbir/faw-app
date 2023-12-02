import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Options } from "./auth/[...nextauth]/route";


export async function GET(request:Request){
    const session = await getServerSession(Options);
    console.log('GET API',session);
    return NextResponse.json({authenticated: !!session})
}