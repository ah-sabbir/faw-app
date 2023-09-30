const GetAllPosts = async () => {
    const res = await fetch("/api/posts");
    const posts = await res.json();
    return posts;
};

export default GetAllPosts;