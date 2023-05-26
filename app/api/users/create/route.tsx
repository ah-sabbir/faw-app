// import { NextResponse } from 'next/server';
// // import axios from 'axios';

// export async function POST(request: Request){
//     const res = await request.json();
//   try {
    
//     if (res) {
//       return NextResponse.json({ message: res })
//     } else {
//       return NextResponse.json({ message: 'reCAPTCHA verification failed' })
//     }
//   } catch (err) {
//     return NextResponse.json({ message: 'Internal server error' })
//   }
// }


import {NextApiRequest, NextApiResponse} from "next";

const Handler = async (req: NextApiRequest, res: NextApiResponse)=>{
  if (req.method === 'POST') {
    // Access the request body
    const { firstName, lastName, email } = req.body;

    // Perform operations with the request body
    // ...

    // Send a response
    res.status(200).json({ message: 'User created successfully' });
  } else {
    // Handle other HTTP methods or send an error response
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

export default Handler;

// async function store(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === "POST") {
//       const { name, email, phone, password, role } = req.body;
//       if (!name || !email || !phone || !password || !role) {
//         res.status(422).json({
//           ok: false,
//           message: "Please provide all the required fields",
//         });
//         return;
//       }
  
//       try {
//         // checking user exist or not
//         const userExists = await prisma.user.findUnique({
//           where: {
//             phone,
//           },
//         });
  
//         if (userExists) {
//           res.status(400).json({ ok: false, message: "User already exists" });
//           return;
//         }
  
//         // password converting normal to hash
//         const salt = bcrypt.genSaltSync(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
  
//         // creating user
//         const user = await prisma.user.create({
//           data: {
//             name,
//             email,
//             phone,
//             password: hashedPassword,
//             role,
//           },
//         });
  
//         if (!user) {
//           res.status(422).json({ ok: false, message: "User not created" });
//           return;
//         }
  
//         res.status(201).json({ ok: true, message: "User created." });
//         return;
//       } catch (error) {
//         res.status(500).json({ ok: false, message: "Something want wrong." });
//       }
//     }
  
//     res.status(404).json({ ok: false, message: "Method not match." });
//   }