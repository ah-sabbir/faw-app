// const GetAllPosts = async () => {
//     const res = await fetch("/api/posts");
//     const posts = await res.json();
//     return posts;
// };

// export default GetAllPosts;
import prisma from '@/lib/prisma';

const GetAllPosts = async () => {
    const posts:any = await prisma.blogPost.findMany();

    return posts;
};

export default GetAllPosts;