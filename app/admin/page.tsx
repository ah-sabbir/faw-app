
import { NextApiRequest } from 'next';
import { getToken } from 'next-auth/jwt';

const Dashboard = async () => {
  
  const token:any = await getToken({ NextApiRequest, secret: process.env.NEXTAUTH_SECRET })

  console.log(token)
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
