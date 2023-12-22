import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/sliderSection/sliderSection';
import GetPostByFeatured from '@/lib/blogPost/getPostByFeatured';

import { authConfig } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export const revalidate = 60;


export default async function Home() {
	const featuredPost = await GetPostByFeatured(true);
	const session = await getServerSession(authConfig);
	const post = featuredPost[0];

	// console.log(featuredPost[0])

  return (
			<>

				<section className="slider mt-[15px] pt-[68px]">
						<HeroSection/>
				</section>

			{/* <pre>{JSON.stringify(session)}</pre> */}
			{/* blog section */}
				<section>
					<div className="container py-12 min-h-screen mx-auto px-4 flex">
							{/* main blog container */}
							<div className="flex flex-wrap mr-[-15px] items-center ">
								{
									[1,2,3,4,5,6,7,8,9,10].map((item,i)=>{
										return (
											<div key={i} className="w-full md:w-full lg:w-3/12">
												<article className="block mb-5 p-2 rounded ">
													<Link className="mb-4 block" href="#">
														<Image src={post?.coverimg} alt="..." width={500} height={500} className="block mb-4 w-full h-full" quality="75" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='lazy'/>
													</Link>
													<span className="font-extra text-sm uppercase letter-spacing-1 text-[#ce8460]">Explore</span>
													<h3 className="post-title mt-1"><Link href="#">{post.title}</Link></h3>
													<p className='pt-5 pb-5 text-clip'>{post.content.substring(1,100)+"..."}</p>
													<span className="letter-spacing text-uppercase font-sm tracking-[3px]">{new Date(post.updatedAt).toDateString()}</span>
												</article>
											</div>
										)
									})
								}
							</div>
						</div>
						{/* <iframe className="InstagramEmbedBlockQuote-ilzGVN QMdha instagram-media instagram-media-rendered" id="instagram-embed-7" src="https://www.instagram.com/p/CKZL259hzmd/embed/captioned/?cr=1&amp;v=8&amp;wp=640&amp;rd=https%3A%2F%2Fwww.vogue.in&amp;rp=%2Fcontent%2Fthis-is-the-christmas-party-makeup-you-should-get-for-your-star-sign#%7B%22ci%22%3A7%2C%22os%22%3A21150.199999999255%2C%22ls%22%3A6488%2C%22le%22%3A7092.0999999996275%7D" allowFullScreen={true} frameBorder={0} height="964" data-instgrm-payload-id="instagram-media-payload-7" scrolling="no" ></iframe> style="background-color: white; border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px; min-width: 326px; padding: 0px;" */}
				</section>
			</>
  		)
}
