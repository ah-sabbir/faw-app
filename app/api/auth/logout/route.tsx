import { NextRequest, NextResponse } from 'next/server';



export async function GET(request:NextRequest) { 
    return NextResponse.json({
        ok: false,
        message: "this is logout api"
      });
}