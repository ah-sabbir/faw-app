"use client";
import Button from '@/components/elements/Button';
import Link from 'next/link';
// import handler from './api/auth/hello';
// import { useRouter } from 'next/router';


// const getSession = async () => {
//   const session = await getServerSession(Options);
//   return session;
// }


export default async function Home() {
  // const { data: session, status } = useSession();
  // const router = useRouter();
  const loginHandler = () => {
    // router.push('/login');
  }
  
  
  return (
    <main>
        <Button className="text-green-600">
            <Link href={"/auth/signin"}>Sign In</Link> 
          </Button>

          {/* <Button className="text-green-600" onClick={() => getSession}>
            Get session
          </Button> */}
          
    </main>
  )
}
