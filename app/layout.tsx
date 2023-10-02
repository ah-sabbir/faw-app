import './themify/css/themify-icons.css'
import './globals.css'


import type { Metadata } from 'next'
import RootHeader from '@/components/header/header'
import { FooterSection } from '@/components/footer/footer'
import GoogleAnalytics from '@/components/ga4/googleanalytics'
import GoogleTagManager from '@/components/gtm/googleTagManager'


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
          process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER && <GoogleTagManager GTM_ID={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER} />
        }
        <RootHeader/>
        {children}
        <FooterSection/>
        </body>
    </html>
  )
}