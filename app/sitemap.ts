import { ALL_POSTS } from '@/lib/blogPost/getPost'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await ALL_POSTS()
  const BASE_URL = 'https://fashionanywhere.shop'

  const postsMap = posts.map((obj:any, i:number)=>{
    return {
		  url: BASE_URL+'/blog/'+ obj.attributes.Slug,
		  lastModified: new Date(obj.attributes.updatedAt),
		  changeFrequency: 'weekly',
		  priority: 0.5,
		}
  })

  return [
    {
      url: 'https://fashionanywhere.shop',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://fashionanywhere.shop/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://fashionanywhere.shop/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://fashionanywhere.shop/cultures',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...postsMap
  ]
}