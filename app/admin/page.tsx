'use client'

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


const Dashboard = async () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/signin?callbackUrl=/protected/client')
    }
  })

  console.log(session);

  return (
    <>
    <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

    <div className="grid lg:grid-cols-3 gap-5 mb-16">
      <div className="rounded bg-white h-40 shadow-sm"></div>
      <div className="rounded bg-white h-40 shadow-sm"></div>
      <div className="rounded bg-white h-40 shadow-sm"></div>
    </div>
    <div className="grid col-1 bg-white h-96 shadow-sm"></div>
  </>
  )
}

export default Dashboard;
