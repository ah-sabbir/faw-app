import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {id}= await request.json()

  if (!id) {
    return NextResponse.json({
      ok: false,
      message: "Please provide user Id.",
    });
  }

  try {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });

    if (!user) {
      return NextResponse.json({ ok: true, message: "User not deleted" });
    }

    return NextResponse.json({ ok: true, message: "User deleted." });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "Something want wrong." });
  }
}
