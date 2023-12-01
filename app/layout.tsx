import '../styles/globals.css';


import type { Metadata } from 'next'
import RootHeader from '@/components/header/header'
import { FooterSection } from '@/components/footer/footer'
import GoogleAnalytics from '@/components/ga4/googleanalytics'
import GoogleTagManager from '@/components/gtm/googleTagManager'
import { usePathname } from 'next/navigation';


// export const metadata: Metadata = {
//   title: 'Fashion Anywhere',
//   description: 'Worlds\'s #1 Fashion and Beauty Magazine',
// }
// import { headers } from 'next/headers';

export const metadata:Metadata = {
  icons: {
    icon: '/app/favicons/icon_16x16.ico',
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

  // const headersList = headers();

  // console.log("this is header list", headersList);

//  const path:any = usePathname()
//     const isAdmin = path.split('/').includes('admin')
//     const isLogin = path.split('/').includes('signin')
//     const isRegister = path.split('/').includes('register')
//     const isForgotPassword = path.split('/').includes('forgot-password')
//     const isResetPassword = path.split('/').includes('reset-password')
//     const isVerifyEmail = path.split('/').includes('verify-email')
//     const isVerifyEmailSuccess = path.split('/').includes('verify-email-success')
//     const isBuilder = path.split('/').includes('builder')

    // if(isBuilder) return (<>{children}</>)

    // className={`${inter.variable}`}

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} > 
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