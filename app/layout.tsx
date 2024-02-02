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
  title: {
    default: "Fashion Anywhere - Your First Choice Fashion and Beauty Magazine.",
    template: `%s | Fashion Anywhere - Worlds\'s #1 Fashion and Beauty Magazine.`,
  },
  description: 'Worlds\'s #1 Fashion and Beauty Magazine.',
  twitter:{
    card: 'summary_large_image'
  },
  metadataBase: new URL('https://fashionanywhere.shop'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: '/static/logos/fashionanywhere-logo.webp',
  },
  // verification: {
  //   google: "google-site-verification=123123123",
  // },
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
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3337775409702678"
     crossOrigin="anonymous"></script>
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