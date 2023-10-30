import Provider from '@/providers/sessionProvider';
import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
  }



export default function BuilderLayout({children}: IProps) {
    return (
      <>
          <Provider>
            {children}
          </Provider>
      </>
    )
  }