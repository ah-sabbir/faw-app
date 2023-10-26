// const GetAllPosts = async () => {
//     const res = await fetch("/api/posts");
//     const posts = await res.json();
//     return posts;
// };

// export default GetAllPosts;
import clientPrisma from '@/lib/prisma';

const GetAllPosts = async () => {
    try {
        const posts:any = await clientPrisma.blogPost.findMany();
        return posts;

    } catch (error) {
        return false
    }

};

export default GetAllPosts;