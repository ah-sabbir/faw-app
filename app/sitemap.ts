import GetAllPosts from "@/lib/blogPost/getPostAll";

const sitemap = async () => {
  const baseUrl = "https://fashionanywhere.shop";


  const posts = await GetAllPosts();

  if(!posts) return [];

  const routes = posts.map((d:any)=>{
    return {
      url: `${baseUrl}/blog/${d.slug}`,
      lastModified: new Date().toISOString(),
    }
  }) ?? [];


  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...routes,
  ];
}


export default sitemap;