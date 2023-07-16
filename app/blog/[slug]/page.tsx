
const Blog = async ({params}:{
    params: {slug:string}
}) => {
  return (
    <div>this is a single blog post page {params.slug}</div>
  )
}

export default Blog;
