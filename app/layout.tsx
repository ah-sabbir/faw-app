import './themify/css/themify-icons.css'
import './globals.css'


import type { Metadata } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import RootHeader from '@/components/header/header'
import { FooterSection } from '@/components/footer/footer'

export const metadata: Metadata = {
  title: 'Fashion Anywhere',
  description: 'Worlds\'s #1 Fashion and Beauty Magazine',
}



export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <RootHeader/>
        {children}
        <FooterSection/>
        </body>
    </html>
  )
}
