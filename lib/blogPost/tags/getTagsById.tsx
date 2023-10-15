import clientPrisma from '@/lib/prisma';

const GetTagsById = async (id: number) => {
    if (!id) return null;
    const res = await clientPrisma.Tag.findUnique({
        where: {
            id: id
        }
    });

    return res;
};

export default GetTagsById;

// Compare this snippet from lib/blogPost/getPostAll.tsx:
// const GetAllPosts = async () => {
//     const res = await fetch("/api/posts");
//     const posts = await res.json();
//     return posts;
// };
//
// export default GetAllPosts;