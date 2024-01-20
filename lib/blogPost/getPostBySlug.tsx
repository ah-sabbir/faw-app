
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ALL_POST, POST_BY_SLUG } from "@/graphql/query"

// apolloclient for api request
const client = new ApolloClient({
  uri: process.env.STRAPI_API_URL+"/graphql",
  headers: {
      'Authorization': 'Bearer '+process.env.STRAPI_API_KEY
  },
  cache: new InMemoryCache()
});

// function to get all the posts
const GET_POST_BY_SLUG = async (slug:String) => {
    try{
        const { data } = await client.query({
            query: POST_BY_SLUG,
            variables: {slug: slug}
          })
          const posts = data?.posts?.data[0]?.attributes
          return posts
    }catch(e){
        return new Error()
    }
};

export default GET_POST_BY_SLUG;




// const GET_POST_BY_SLUG = async (slug:string) => {
//     try{
//         const post:any = await fetch(`${process.env.STRAPI_API_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`,{
//             headers: {
//                 'Authorization': 'Bearer '+process.env.STRAPI_API_KEY
//             }
//         }).then(res=> res.json())
//         return post;
//     }catch(e){
//         // return new Error()
//     }
// }

// // Compare this snippet from lib/blogPost/getPostAll.tsx:
// // const GetAllPosts = async () => {
// //     const res = await fetch("/api/posts");
// //     const posts = await res.json();
// //     return posts;
// // };
// //
// export default GET_POST_BY_SLUG;