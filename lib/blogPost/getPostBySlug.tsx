import database from '@/lib/prisma';

const GetPostBySlug = async (slug: string) => {
    if (slug === null) {
        return null;
    }
    const res = await database.Post.findUnique({
        where: {
            slug: slug
        }
    });

    if (!res) {
        return {ok: false, exist: false};
    }

    return {ok: true, exist: true, data:res };
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