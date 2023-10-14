import clientPrisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

const DELETE = async (req: NextRequest, res: NextResponse) => {
  const { searchParams } = new URL(req.nextUrl);

//   const slug: any = searchParams.get("slug")

//   if(slug){
//     const rest = await clientPrisma.blogPost.delete({
//         where: {
//             slug: slug,
//         },
//         });
//   }

  console.log(req);
}

export default DELETE;
