import clientPrisma from '@/lib/prisma';

const GetPostBySlug = async (slug: string) => {
    if (slug === null) {
        return null;
    }
    const res = await clientPrisma.blogPost.findUnique({
        where: {
            slug: slug
        }
    });

    return res;
};

export default GetPostBySlug;

// Compare this snippet from lib/blogPost/getPostAll.tsx:
// const GetAllPosts = async () => {
//     const res = await fetch("/api/posts");
//     const posts = await res.json();
//     return posts;
// };
//
// export default GetAllPosts;