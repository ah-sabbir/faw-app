export default async function sitemap() {
  const baseUrl = "https://fashionanywhere.shop";

  const res = await fetch(`${baseUrl}/api/posts`);
  const posts = await res.json();



  // const r = posts.map((d:any)=>{
  //   return {
  //     url: `${baseUrl}/blog/${d.slug}`,
  //     lastModified: new Date().toISOString(),
  //   }
  // })


  const routes =
  Object.entries(posts)?.map((post:any) => {
    // console.log(`${baseUrl}/blog/${post[1]?.slug}`)
    if(!post[1]?.slug) return {url: `${baseUrl}`,lastModified: new Date().toISOString(),};

    return {
      url: `${baseUrl}/blog/${post[1]?.slug}`,
      lastModified: new Date().toISOString(),
    };
  }) ?? [];

  // console.log( routes);

// return posts

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...routes,
  ];
}