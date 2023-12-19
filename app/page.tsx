import Image from 'next/image'
import Link from 'next/link'
import ImageSlider from '@/components/sliderSection/sliderSection';
import GetPostByFeatured from '@/lib/blogPost/getPostByFeatured';
import { FaArrowRight } from 'react-icons/fa';

import { authConfig } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export const revalidate = 60;


export default async function Home() {
	const featuredPost = await GetPostByFeatured(true);
	const session = await getServerSession(authConfig);

	// console.log(featuredPost[0])

  return (
			<>

				<section className="slider mt-[15px] pt-[68px]">
					<div className="p-2 m-auto w-full">
						<ImageSlider/>
					</div>
				</section>

			{/* <pre>{JSON.stringify(session)}</pre> */}
			{/* blog section */}
				<section className=" pt-[70px] pb-[70px] relative">
					<div className=" max-w-md md:max-w-screen-md lg:max-w-6xl px-[15px] mx-auto">
							{/* main blog container */}
							<div className="flex flex-wrap mr-[-15px] items-center justify-center">
								{
									featuredPost && featuredPost.map((post:any,i:any)=>{
										return post.id && 
										(
											<div key={i} className="w-full px-4 md:w-2/4 lg:w-1/3">
												<article className="block mb-5 p-2 rounded ">
													<Link className="mb-4 block" href="#">
														<Image src={post.coverimg} alt="..." width={100} height={100} className="block mb-4 w-full h-full" quality="75" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
													</Link>
													<span className="font-extra text-sm uppercase letter-spacing-1 text-[#ce8460]">Explore</span>
													<h3 className="post-title mt-1"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
													<p className='pt-5 pb-5 text-clip'>{post.content.substring(1,100)+"..."}</p>
													<span className="letter-spacing text-uppercase font-sm tracking-[3px]">{new Date(post.updatedAt).toDateString()}</span>
												</article>
											</div>
										)
									})
								}
							</div>

							<div className="m-auto">
								<div className="pagination flex items-center justify-center pl-0 list-none rounded-[0.25rem] mt-5 pt-4">
									<ul className="flex list-inline  ">
										<li className="list-inline-item active:bg-[#ce8460] active:text-[#fff] active:border-[#ce8460]"><a href="#" className="active">1</a></li>
										<li className="list-inline-item"><a href="#">2</a></li>
										<li className="list-inline-item"><a href="#">3</a></li>
										<li className="list-inline-item"><a href="#" className="prev-posts flex items-center justify-center leading-5"><FaArrowRight className='inline-block'/></a></li>
									</ul>
								</div>
							</div>
					</div>
				</section>
			</>
  		)
}
