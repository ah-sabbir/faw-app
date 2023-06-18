import prisma from '@/lib/prisma';
import bcrypt from "bcryptjs";
import { NextResponse } from 'next/server';

const bcryptP:any = bcrypt;

export async function POST(request:Request) { 
   const data:any = await request.json()

  // checking if all fields are entered
//   console.log(data);
  
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: data?.email,
            },
            });
            console.log(user);
            if (!user) {
                return NextResponse.json({
                ok: false,
                message: "incorrect user or password",
                });
            }
            const passwordMatch = await bcrypt.compare(
                data?.password,
                user?.password
            );
            if (!passwordMatch) {
                return NextResponse.json({
                ok: false,
                message: "incorrect user or password",
                });
            }

        return NextResponse.json({ ok: true, user: user });

    } catch (error) {
        return NextResponse.json({ ok: false, message: error });
    }
}
