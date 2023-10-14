import { notFound, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image";
import CommenstSection from "@/components/commentSection/comments";
import GetPostBySlug from "@/lib/blogPost/getPostBySlug";
import GetTagsById from "@/lib/blogPost/tags/getTagsById";
import GetUserById from "@/lib/userInfo/getUserById";

export const getStaticPaths = async () => {
    const res = await fetch("/api/posts");
    const posts = await res.json();
    const paths = posts.map((post:any) => ({
      params: { slug: post.slug },
    }))
    return { paths, fallback: false }
  }

const generateMetadata = async ({params, }: { params: { slug: string; }; })=>{
    return {props: {params}}
}
  

const BlogPage = async ({params, paths}:any) => {  
    
    console.log(paths)
    
    const res = await GetPostBySlug(params.slug);
    const tagRes = await GetTagsById(res.tagId );
    const user = await GetUserById(res.userId);
    console.log(user);

  return (
    <>
        <section className={`w-full relative pt-[70px]`}>
            <div className=" md:max-w-3xl lg:max-w-6xl px-[15px] mx-auto"> {/* container */}
                <div className="flex flex-col lg:flex-row flex-wrap mx-[-15px]"> {/* row */}
                    <div className="w-full px-8 py-7 lg:w-8/12"> {/*  left side */}
                        <div className="single-post">
                            <div className="flex flex-col items-center justify-center mb-5"> {/* post header */}
                                <div className="meta-cat">
                                <Link className="text-color font-extra text-sm text-uppercase letter-spacing-1 text-[#ce8460]" href="#">{tagRes?.name?tagRes?.name:""} ,</Link>
                                </div>
                                <h1 className="my-2 text-center font-AvantGarde">{res.title}</h1>
                                <div className="post-meta ">
                                    <span className="uppercase text-xs letter-spacing-1 mr-3">by Liam</span>
                                    <span className="uppercase text-xs letter-spacing-1">January 17,2019</span>
                                </div>
                                <div className="post-cover-image w-full mt-[3rem]">
                                    <Image src="https://themewagon.github.io/revolve/images/fashion/bg-banner.jpg" className="w-full" width={100} height={100} quality="85" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="..."/>
                                </div>
                            </div>
                            <div className="py-[30px]" dangerouslySetInnerHTML={{ __html: res?.content? res?.content:""}} /> {/* post body */}
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