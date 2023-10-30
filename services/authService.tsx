import { NextResponse } from 'next/server';


import bcrypt from "bcryptjs";
import clientPrisma from '@/lib/prisma';

const secret = process.env.NEXTAUTH_SECRET

//import jwt token and make a function that will return the user object
// const jwt = require('jsonwebtoken');
// const getToken = (user:any) => {
//     return jwt.sign({
//         id: user.id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//     }, secret, {
//         expiresIn: '48h'
//     })
// }


const authenticate = async (email: string, password: string) => {

    const user:any = await clientPrisma.user.findFirst({
        where: {
          email: email,
        },
      });
    if(user === null){
      return {ok:false, error:"User not found"};
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
      return {ok:false, error:"Password is incorrect"};
    }

    const { password:pass, ...rest } = user;

    return {ok:true, user:rest};

    // if(user && (await bcrypt.compare(password,user.password)) ){
    //     const { password, ...rest } = user;
    //     return rest;
    // }else{
    //     return null;
    // }
}


export default authenticate;
