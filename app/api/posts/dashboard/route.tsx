import { NextResponse } from 'next/server';
 
export async function GET() { 
  return NextResponse.json({ ok:200, msg:"this is a post dashboard here one user can see all the posts" });
}