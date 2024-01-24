import '@/styles/globals.css';
import type { Metadata } from 'next'
import RootHeader from '@/components/header/header'
import { FooterSection } from '@/components/footer/footer'
import GoogleTagManager from '@/components/gtm/googleTagManager'
import Provider from '@/providers/sessionProvider';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata:Metadata = {
  icons: {
    icon: '/static/logos/fashionanywhere-logo.webp',
  },
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


  return (
    <html lang="en" className={`${poppins.variable}`} >
      <head>
      <meta name="p:domain_verify" content="aa62db3cc92aa387d76d2ecd0c3b443e"/>
      <meta name="google-adsense-account" content="ca-pub-3337775409702678"/>
      </head>
      <body className=' font-normal'> 
        {
          process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER && <GoogleTagManager GTM_ID={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER} />
        }
          <Provider>
            <RootHeader/>
              {children}
            <FooterSection/>
          </Provider>
        </body>
    </html>
  )
}