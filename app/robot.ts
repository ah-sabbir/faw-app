import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/amdin','/access'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_RUL}/sitemap.xml`,
  }
}