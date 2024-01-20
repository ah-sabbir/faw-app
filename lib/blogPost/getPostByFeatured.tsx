// // const GetPostByFeatured = async (featured: boolean) => {
// //     const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`); //?featured=${featured} true/fales
// //     const posts = await res.json();
// //     return posts;
// // };

// // export default GetPostByFeatured;


// import database from '@/lib/prisma';
// import { url } from 'inspector';

// // const GetAllPosts = async () => {
// //     const posts:any = await prisma.blogPost.findMany();

// //     return posts;
// // };

// const GetPostByFeatured = async (featured: boolean) => {
//     try{
//         const posts:any = await fetch(`${process.env.STRAPI_API_URL}/api/posts`,{
//             headers: {
//                 'Authorization': 'Bearer '+process.env.STRAPI_API_KEY
//             },
//             cache: 'force-cache'
//         }).then(res=> res.json())
//         return posts;
//     }catch(e){
//         return new Error()
//     }
// };


// const GET_CATEGORIES = async ()=>{
//     try {
//         const categories = await fetch(process.env.STRAPI_API_URL+"/api/categories", {
//             headers: {
//                 'Authorization': 'Bearer '+process.env.STRAPI_API_KEY
//             }
//         }).then(res=> res.json())
//         return categories;
//     } catch (error) {
//         return new Error()
//     }
// }

// export {GET_CATEGORIES, GetPostByFeatured};

