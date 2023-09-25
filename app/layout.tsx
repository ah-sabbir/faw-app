import './themify/css/themify-icons.css'
import './globals.css'


import type { Metadata } from 'next'
import RootHeader from '@/components/header/header'
import { FooterSection } from '@/components/footer/footer'
import GoogleAnalytics from '@/components/ga4/googleanalytics'

// export const metadata: Metadata = {
//   title: 'Fashion Anywhere',
//   description: 'Worlds\'s #1 Fashion and Beauty Magazine',
// }

export const metadata:Metadata = {
  metadataBase: new URL("https://fashionanywhere.shop"),
  title: {
    default: "Fashion Anywhere",
    template: `%s | Fashion Anywhere`,
  },
  description: 'Worlds\'s #1 Fashion and Beauty Magazine.',
  verification: {
    google: "google-site-verification=123123123",
  },
};


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  // console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        }
        <RootHeader/>
        {children}
        <FooterSection/>
        </body>
    </html>
  )
}