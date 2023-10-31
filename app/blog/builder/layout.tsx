import Provider from '@/providers/sessionProvider';
import { ReactNode } from 'react';
// import { getServerSession } from "next-auth/next"
// import { IncomingMessage, ServerResponse } from 'http';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { Options } from '@/lib/authOptions';
interface IProps {
    children: ReactNode;
  }

  // import { authOptions } from 'pages/api/auth/[...nextauth]'
  // 
  
  // export async function getServerSideProps(context: { req: any | NextApiRequest | (IncomingMessage & { cookies: Partial<{ [key: string]: string; }>; }); res: any | ServerResponse<IncomingMessage> | NextApiResponse; }) {
  //   const session = await getServerSession(context.req, context.res, Options)
  // //...
  // }

export default function BuilderLayout({children}: IProps) {
    return (
      <>
          <Provider>
            {children}
          </Provider>
      </>
    )
  }