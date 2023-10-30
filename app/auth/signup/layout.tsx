import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
  }



export default function SignUpLayout({children}: IProps) {
    return (
      <>
            {children}
      </>
    )
  }