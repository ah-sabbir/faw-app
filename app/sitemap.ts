import GetAllPosts from "@/lib/blogPost/getPostAll";

export default async function sitemap() {
  const baseUrl = "https://fashionanywhere.shop";

  const posts = await GetAllPosts();

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