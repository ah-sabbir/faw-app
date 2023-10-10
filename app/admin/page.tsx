'use client'

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


const Dashboard = async () => {
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect('/auth/signin?callbackUrl=/protected/client')
  //   }
  // })

  // console.log(session);

  return (
    <>
    <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>
  </>
  )
}

export default Dashboard;
