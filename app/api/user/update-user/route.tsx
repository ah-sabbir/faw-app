import { NextResponse } from 'next/server';
// import { paginate } from "../../../functions/pagination";
// import prisma from "../../lib/prisma";

export async function GET() { 
    return NextResponse.json({ hello:"ok" });
  }
