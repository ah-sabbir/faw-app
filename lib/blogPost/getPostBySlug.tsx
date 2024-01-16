


const GET_POST_BY_SLUG = async (slug:string) => {
    try{
        const post:any = await fetch(`${process.env.STRAPI_API_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`,{
            headers: {
                'Authorization': 'Bearer '+process.env.STRAPI_API_KEY
            }
        }).then(res=> res.json())
        return post;
    }catch(e){
        return new Error()
    }
}

// Compare this snippet from lib/blogPost/getPostAll.tsx:
// const GetAllPosts = async () => {
//     const res = await fetch("/api/posts");
//     const posts = await res.json();
//     return posts;
// };
//
export default GET_POST_BY_SLUG;