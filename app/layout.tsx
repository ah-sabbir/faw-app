// import PageWrapper from '@/components/PageWrapper';
import StickyNavbar from '@/components/StickyNav';
import Navigation from '@/components/Nav/navigation';
// import Provider from '@/providers/sessionProvider';
import '@/styles/globals.css';
// import { Inter } from 'next/font/google';
// import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

// const inter = Inter({ subsets: ['latin'] })

interface IProps {
  children: ReactNode;
}

export const metadata = {
  title: 'FASHION ANYWHERE',
  description: 'Trendy Fashions in your door today!',
}

export default function RootLayout({children}: IProps) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.png" /> */}
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="fashion, anywhere, shop, trendy, fashions, Sustainable fashion, Streetwear, Athleisure, Gender-neutral fashion, Vintage clothing, Oversized, Neon colors, Animal prints, Tie-dye, Chunky sneakers, Crop tops, Boiler suits, Bucket hats, Bike shorts, Puff sleeves, Sheer fabrics, Layering, Statement earrings, Clear bags, Utility belts, Monochrome outfits, Pastel shades, High-waisted pants, Faux fur coats, Vegan leather " />
        <meta name="author" content="Fashion Anywhere" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="translate" />
      </head>
      <body
      suppressHydrationWarning={true} 
      >
          <StickyNavbar />
          <Navigation />
          {/* <PageWrapper> */}
            {children}
          {/* </PageWrapper> */}
        </body>
    </html>
  )
}
