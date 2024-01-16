// const GetAllPosts = async () => {
//     const res = await fetch("/api/posts");
//     const posts = await res.json();
//     return posts;
// };

// export default GetAllPosts;
import database from '@/lib/prisma';

const GET_POSTS = async () => {
    try{
        const posts:any = await fetch(`${process.env.STRAPI_API_URL}/api/posts?populate=*`,{
            headers: {
                'Authorization': 'Bearer '+process.env.STRAPI_API_KEY
            },
            cache: "force-cache"
        }).then(res=> res.json())
        return posts;
    }catch(e){
        return new Error()
    }
};

export default GET_POSTS;