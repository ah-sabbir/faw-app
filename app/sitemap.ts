import { ALL_POSTS } from '@/lib/blogPost/getPost'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await ALL_POSTS()
  const BASE_URL = 'https://fashionanywhere.shop'

  const postsMap = posts.map((obj:any, i:number)=>{
    return {
		  url: BASE_URL+'/blog/'+ obj.attributes.slug,
		  lastModified: new Date(obj.attributes.updatedAt).toISOString(),
		  changeFrequency: 'weekly',
		  priority: 1,
		}
  })

  const routeMap = ['', 'blog', 'category', 'cultures', 'about'].map((v,i)=>{
    return {
      url:BASE_URL+'/'+v,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  })

  return [
    ...routeMap,
    ...postsMap
  ]
}