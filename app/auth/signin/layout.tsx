import Provider from '@/providers/sessionProvider';
import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
  }



export default function SignInLayout({children}: IProps) {
    return (
      <>
          <Provider>
            {children}
          </Provider>
      </>
    )
  }