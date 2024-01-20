// import database from '@/lib/prisma';

// const GetLatestPost = async () =>{
//     try {
//         const latestPost = await database.Post.findMany({
//             orderBy: {
//                 id: 'desc',
//             },
//             take: 1,
//         });
//         const {title, coverimg, slug, content, updatedAt} = latestPost[0];
//         return {
//             ok: true,
//             title,
//             content,
//             coverimg,
//             slug,
//             updatedAt
//         }
//     } catch (error) {
//         return {
//             ok: false,
//             error
//         }
//     }

// }

// export default GetLatestPost;

// // const latestQuery = await database.Post.findMany({
// //     orderBy: {
// //         id: 'desc',
// //     },
// //     take: 1,
// // })