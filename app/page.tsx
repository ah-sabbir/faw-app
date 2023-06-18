"use client";
import Button from '@/components/elements/Button';
// import { getServerSession } from "next-auth/next";

// import handler from './api/auth/hello';
// import { useSession } from 'next-auth/react';

import { signIn } from 'next-auth/react';
// import { options } from "./api/auth/[...nextauth]/route";

// const getSession = async () => {
//   const session = await getServerSession(options);
//   console.log(session);
// }


export default async function Home() {
  // const session = await getServerSession(options)
  // console.log(session.user)

  // const { data: session } = useSession();
  // console.log(session?.user);
  
  return (
    <main>
        <Button className="text-green-600" onClick={() => signIn()}>
            Sign In
          </Button>

          {/* <Button className="text-green-600" onClick={() => getSession}>
            Get session
          </Button> */}
          
    </main>
  )
}
