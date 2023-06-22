import Provider from '@/providers/sessionProvider';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] })

interface IProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Fashion Anywhere',
  description: 'Trendy Fashions in your door today!',
}

export default function RootLayout({children}: IProps) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning={true} 
      >
        <Provider>
          {children}
        </Provider>
        </body>
    </html>
  )
}
