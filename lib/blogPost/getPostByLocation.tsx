const GetPostByLocation = async (location: string) => {
    const res = await fetch(`/api/posts/${location}`);
    const posts = await res.json();
    return posts;
};

export default GetPostByLocation;

