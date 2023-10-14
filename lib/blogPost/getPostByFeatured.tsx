// const GetPostByFeatured = async (featured: boolean) => {
//     const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`); //?featured=${featured} true/fales
//     const posts = await res.json();
//     return posts;
// };

// export default GetPostByFeatured;


import clientPrisma from '@/lib/prisma';

// const GetAllPosts = async () => {
//     const posts:any = await prisma.blogPost.findMany();

//     return posts;
// };

const GetPostByFeatured = async (featured: boolean) => {
    const posts:any = await clientPrisma.blogPost.findMany();
    return posts;
};

export default GetPostByFeatured;