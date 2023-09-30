const GetPostByFeatured = async (featured: boolean) => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`); //?featured=${featured} true/fales
    const posts = await res.json();
    return posts;
};

export default GetPostByFeatured;
