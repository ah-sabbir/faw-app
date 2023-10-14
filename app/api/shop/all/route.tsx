import { NextRequest, NextResponse } from 'next/server';



export async function GET(request:NextRequest) { 
  //  const user:any = await prisma.product.findMany();
    return NextResponse.json({
        ok: false,
        message: "this is all products get method"
      });
}