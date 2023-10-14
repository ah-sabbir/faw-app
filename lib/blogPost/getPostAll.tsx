// const GetAllPosts = async () => {
//     const res = await fetch("/api/posts");
//     const posts = await res.json();
//     return posts;
// };

// export default GetAllPosts;
import clientPrisma from '@/lib/prisma';

const GetAllPosts = async () => {
    const posts:any = await clientPrisma.blogPost.findMany();

    return posts;
};

export default GetAllPosts;