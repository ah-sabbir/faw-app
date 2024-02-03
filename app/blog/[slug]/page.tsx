// import { notFound, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image";
import CommenstSection from "@/components/commentSection/comments";
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import { GET_POST_BY_SLUG } from "@/lib/blogPost/getPost";
import './module.style.css'
// import textParser from "@/lib/htmlParser";

interface PageProps {
    params: {
        slug: string
    }
}

// Generate MetaData
export async function generateMetadata({ params:{slug} }:PageProps) {
    const data = await GET_POST_BY_SLUG(slug);
    // console.log("this is dynamic metadata", data?.attributes?.img?.data?.attributes?.formats?.large?.url)
    return {
      title: data?.attributes?.title,
      description: data?.attributes?.meta_description,
      url: 'https://fashionanywhere.shop',
      siteName: 'fashion anywhere',
      robots:{
	index: true,
	follow: true
	},
      openGraph: {
        images: data?.attributes?.img?.data?.attributes?.formats?.medium?.url,
        locale: 'en_US',
      }
    }
  }
// end Gerate MetaData


const BlogPage = async ({params}:PageProps) => {  

        const data = await GET_POST_BY_SLUG(params.slug);
        const post = data?.attributes;
        const postContent = data?.attributes?.content
        // console.log(postContent)

  return (
    <>
        <section className={`w-full relative pt-[70px]`}>
            <div className=" md:max-w-3xl lg:max-w-6xl px-[15px] mx-auto"> {/* container */}
                <div className="flex flex-col lg:flex-row flex-wrap mx-[-15px]"> {/* row */}
                    <div className="w-full px-8 py-7 lg:w-8/12"> {/*  left side */}
                        <div className="single-post">
                            <div className="flex flex-col items-center justify-center mb-5"> {/* post header */}
                                <div className="meta-cat">
                                {/* <Link className="text-color font-extra text-sm text-uppercase letter-spacing-1 text-[#ce8460]" href="#">{tagRes?.name?tagRes?.name:""} ,</Link> */}
                                </div>
                                <h1 className="my-2 text-center font-AvantGarde">{post?.title || ""}</h1>
                                <div className="post-meta ">
                                    <Link href={`/category/${post?.category?.data?.attributes?.slug}`} ><span className="uppercase text-sm letter-spacing-1 mr-3">{post?.category?.data?.attributes?.title}</span></Link>
                                    <span className="uppercase text-xs letter-spacing-1">{new Date(post?.updatedAt).toDateString()}</span>
                                </div>
                                <div className="post-cover-image w-full mt-[3rem]">
                                    <Image src={post?.img?.data?.attributes?.formats?.medium?.url} className="w-full" width={500} height={500} quality="85" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="..."/>
                                </div>
                            </div>
                            {/* <div className="py-[30px]" dangerouslySetInnerHTML={{ __html: convertTHTML(post?.Content)  || ""}} /> */}
                            <BlocksRenderer content={postContent} />
                            {/* <Renderer BlockProps={postContent} /> */}
                            <div>
                                <Link className="pl-2 text-xl" href="#">#Health</Link>
                                <Link className="pl-2 text-xl" href="#">#Game</Link>
                                <Link className="pl-2 text-xl" href="#">#Tour</Link>
                            </div>
                        </div>
                        <div className="pg-nav w-full border-t-2 border-b-2 flex items-center justify-between mt-5">
                            <div className="prev-post">
                                <Link href="#">
                                    <span className="uppercase font-sm leading-normal">Next</span>
                                    <h4 className="mt-3"> Intel&apos;s new smart glasses actually look good</h4>
                                </Link>
                            </div>
                            <div className="next-post text-right">
                                <Link href="#">
                                    <span className="uppercase font-sm leading-normal  text-right">Previous</span>
                                    <h5 className="mt-3">Free Two-Hour Delivery From Whole Foods</h5>
                                </Link>
                            </div>
                        </div>
                        <div className="related-posts mt-6">
                            <h3 className="w-full text-center">You May Also Like</h3>
                            <div className="flex mt-5 gap-2 flex-col items-center justify-center md:flex-row md:flex-nowrap lg:flex-row">
                                {
                                    [1,2,3].map((d,i)=>{
                                        return (
                                            <div key={i} className=" w-full lg:w-4/12 p-5">
                                                    <Link className="" href="/blog-heading">
                                                        <Image src="https://themewagon.github.io/revolve/images/fashion/img-1.jpg" alt="" width={100} height={100} quality="85" className="w-full"/>
                                                    </Link>
                                                    <h5 className=""><Link href="/The-best-place">The best place to explore to enjoy</Link></h5>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <CommenstSection/>
                    </div>
                    <div> {/* right side */}

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}


export default BlogPage;