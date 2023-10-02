import { notFound, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image";
import CommenstSection from "@/components/commentSection/comments";


const generateMetadata = async ({params, }: { params: { slug: string; }; })=>{
    try {
        const res:Response = await fetch(`/api/posts/${params.slug}`);
        const post = await res.json();
        if(!post)
            return {
             title: "Not Found",
             description: "The page you are looking for does not exist."    
            }
        
        return {
            title: post.title,
            description: post.description,
            alternates: {
              canonical: `/post/${post.slug}`,
            },
        }
    } catch (e) {
        console.log(e);
    }

}

interface BlogPageProps {
    params: {
        slug: string
    }
}

export const revalidate = 86400;

// export async function generateStaticParams({params}:any) {
//     const res = fetch("/api/posts");

    
    // const posts = await getPostsMeta() //deduped!

    // if (!posts) return []

    // return posts.map((post) => ({
    //     postId: post.id
    // }))
//     return params;
// }

// async function getStaticProps({ params }:BlogPageProps) {
//     // console.log(params.slug)
  
//     // Fetch the data for the blog post with slug
//     const response = await fetch(`/api/posts/${params}`);
//     const blogPostData = await response.json();
  
//     // // Parse the blog post data
//     const BlogData = {
//       title: blogPostData.title,
//       content: blogPostData.content,
//       createdAt: blogPostData.createdAt,
//       updatedAt: blogPostData.updatedAt,
//       slug: blogPostData.slug
//     };
  
//     // // Return the parsed blog post data
//     return {
//       props: {
//         blog: BlogData,
//       },
//     };
//   }
  

const BlogPage = ({blog}:any) => {    
    
    // const slug = Props.params.slug;

    // console.log(blog);

  return (
    <>
        <section className="w-full relative pt-[70px]">
            <div className=" md:max-w-3xl lg:max-w-6xl px-[15px] mx-auto"> {/* container */}
                <div className="flex flex-col lg:flex-row flex-wrap mx-[-15px]"> {/* row */}
                    <div className="w-full px-8 py-7 lg:w-8/12"> {/*  left side */}
                        <div className="single-post">
                            <div className="flex flex-col items-center justify-center mb-5"> {/* post header */}
                                <div className="meta-cat">
                                <Link className="text-color font-extra text-sm text-uppercase letter-spacing-1 text-[#ce8460]" href="#">Health ,</Link>
                                </div>
                                <h2 className="my-2 text-center">First Look At Self-Portrait&apos;s Autumn Collection</h2>
                                <div className="post-meta ">
                                    <span className="uppercase text-xs letter-spacing-1 mr-3">by Liam</span>
                                    <span className="uppercase text-xs letter-spacing-1">January 17,2019</span>
                                </div>
                                <div className="post-cover-image w-full mt-[3rem]">
                                    <Image src="https://themewagon.github.io/revolve/images/fashion/bg-banner.jpg" className="w-full" width={100} height={100} quality="85" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="..."/>
                                </div>
                            </div>
                            <div className="py-[30px]"> {/* post body */}
                                <p>It was a cheerful prospect. I asked Perry what he thought about it; but he only shrugged his shoulders and continued a longwinded prayer he had been at for some time. He was wont to say that the only redeeming feature of our captivity was the ample time it gave him for the improvisation of prayers—it was becoming an obsession with him.</p>
                                <h2 className="my-5">First Look At Self-Portrait&apos;s Autumn Collection</h2>
                                <p>The Sagoths had begun to take notice of his habit of declaiming throughout entire marches. One of them asked him what he was saying—to whom he was talking. The question gave me an idea, so I answered quickly before Perry could say anything.</p>
                                <blockquote className="relative lg:pr-12 lg:pl-12 pb-7 my-11 text-md md:text-xl leading-9 font-['Lora',serif] font-normal italic text-center">
                                    <i className="ti-quote-left mr-2"></i>A wise girls knows her limit to touch the
                                    sky.Repellat sapiente neque iusto praesentium adipisci.The question gave me an idea,
                                    so I answered quickly before Perry could say anything.<i className="ti-quote-right ml-2"></i>
                                </blockquote>
                                <div className="w-full flex flex-col mb-5 pb-5 items-center justify-center gap-1 md:flex-row">
                                    <div className=" w-full pl-2 md:w-1/2 ">
                                        <Image src="https://themewagon.github.io/revolve/images/fashion/single-img1.png" className="w-full" width={100} height={100} quality="85" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  alt="..."/>
                                    </div>
                                    <div className="w-full pl-2 md:w-1/2 ">
                                        <Image src="https://themewagon.github.io/revolve/images/fashion/single-img2.png" className="w-full" width={100} height={100} quality="85" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="..."/>
                                    </div>
                                </div>
                                <h2 className="my-5">Enjoying the view of summer</h2>
                                <p>The Sagoths had begun to take notice of his habit of declaiming throughout entire marches. One of them asked him what he was saying—to whom he was talking.<br/><br/> The question gave me an idea, so I answered quickly before Perry could say anything.Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/><br/>Unde cum delectus exercitationem natus quidem enim error suscipit. Iure cupiditate nobis quaerat consectetur! Vero aliquam, amet ipsum ullam reiciendis nostrum voluptate accusantium provident ut blanditiis incidunt.</p>
                            </div>
                            <div>
                                <Link className="pl-2 text-xl" href="#">#Health</Link>
                                <Link className="pl-2 text-xl" href="#"> #Game</Link>
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




// position: relative;
// padding: 0px 51px 30px 40px;

// margin: 54px 0 42px;
// font-size: 20px;
// line-height: 34px;
// font-family: "Lora", serif;
// font-weight: 400;
// font-style: italic;
// text-align: center;
// }