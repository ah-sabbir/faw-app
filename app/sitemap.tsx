// app/sitemap.js

import GetAllPosts from "@/lib/blogPost/getPostAll";
import { GetPostByFeatured } from "@/lib/blogPost/getPostByFeatured";

// import { getSortedPostsData } from "../lib/posts";

const URL = "https://fashionanywhere.shop";

export default async function sitemap() {
  const { data, meta } = await GetPostByFeatured(true);
  
  // posts.map(({ slug, date }) => ({
  //   url: `${URL}/blog/${id}`,
  //   lastModified: date,
  // }));

  // const routes = ["", "/portfolio", "/blog"].map((route) => ({
  //   url: `${URL}${route}`,
  //   lastModified: new Date().toISOString(),
  // }));

  const Posts = data.map((d:any,i:any) =>{
    return [{
      url:`${URL}/blog/${d.attributes.slug}`,
      lastModified: d.created_at
      },
      {
        url: `${URL}/blog/${d.attributes.slug}`,
        lastModified: new Date().toISOString(),
      }
    ]
  })

  return Posts;
}
