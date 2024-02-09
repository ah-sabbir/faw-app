import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/','/blog','/blog/*'],
      disallow: ['/amdin','/access'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
  }
}