import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';
// import { paginate } from "../../../functions/pagination";
// import prisma from "../../lib/prisma";

export async function GET() { 
  const users = await prisma.user.findMany();
    return NextResponse.json({ok:200,data:users});
  }
