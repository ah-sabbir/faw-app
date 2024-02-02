import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/accounts/',
    },
    sitemap: 'https://fashionanywhere.shop/sitemap.xml',
    host: 'https://fashionanywhere.shop'
  }
}