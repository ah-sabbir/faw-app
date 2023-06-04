import { NextResponse } from 'next/server';
 
export async function GET() { 
  return NextResponse.json({ ok:200, msg:"from here user can make a post of their own products" });
}