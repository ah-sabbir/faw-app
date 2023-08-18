// // import { NextApiRequest, NextApiResponse } from 'next';
// // import middleware from "next-auth/middleware"
// import { NextRequest, NextResponse } from 'next/server';


// // This is an example of to protect an API route

// // eslint-disable-next-line import/no-anonymous-default-export
// export const middleware = async (req: NextRequest, res: NextResponse) => {
//   // Check if the user is logged in
//   const user:any = await req.user();

//   // If the user is not logged in, redirect to the login page
//   if (!user) {
//     res.redirect('/login');
//     return;
//   }

//   // Continue with the request
//   await middleware(req, res);
// };
