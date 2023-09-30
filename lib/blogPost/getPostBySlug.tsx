const GetPostBySlug = async (slug: string) => {
    const res = await fetch(`/api/posts/${slug}`);
    const posts = await res.json();
    return posts;
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