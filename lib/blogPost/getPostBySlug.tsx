import prisma from '@/lib/prisma';

const GetPostBySlug = async (slug: string) => {
    const res = await prisma.blogPost.findUnique({
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