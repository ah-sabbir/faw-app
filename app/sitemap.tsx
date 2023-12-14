// app/sitemap.js

import GetAllPosts from "@/lib/blogPost/getPostAll";

// import { getSortedPostsData } from "../lib/posts";

const URL = "https://fashionanywhere.shop";

export default async function sitemap() {
  const posts = await GetAllPosts()
  
  // posts.map(({ slug, date }) => ({
  //   url: `${URL}/blog/${id}`,
  //   lastModified: date,
  // }));

  // const routes = ["", "/portfolio", "/blog"].map((route) => ({
  //   url: `${URL}${route}`,
  //   lastModified: new Date().toISOString(),
  // }));

  const Posts = posts.map((d:any,i:any) =>{
    return {
      url:`${URL}/blog/${d.slug}`,
      lastModified: d.created_at
      }
  })

    const routes = ["", "/blog"].map((route) => ({
      url: `${URL}${route}`,
      lastModified: new Date().toISOString(),
    }));

  return [...routes, ...posts];
}
