import { NextResponse } from 'next/server';
 
export async function GET() { 
  return NextResponse.json({ ok:200, msg:"this is a test api" });
}