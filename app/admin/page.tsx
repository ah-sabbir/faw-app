'use client'

import Sidebar from "@/components/admin/sidebar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";


const Dashboard = () => {
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect('/auth/signin?callbackUrl=/protected/client')
  //   }
  // })


  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>
      <div className="w-full h-full p-4 sm:m-5">
        <Sidebar />
          
        <div className="flex items-center justify-between">
          this is the dashboard body
        </div>
      </div>
  </>
  )
}

export default Dashboard;
