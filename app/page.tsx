import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/sliderSection/sliderSection';
// import {GetPostByFeatured} from '@/lib/blogPost/getPostByFeatured';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

import { authConfig } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { ALL_POSTS, LATEST_POST } from '@/lib/blogPost/getPost';

export const revalidate = 60;


export default async function Home() {
	const data = await ALL_POSTS();

	// console.log(data)



	// console.log("this is post from api ", data);

  return (
			<>

				<section className="w-[90%] mx-auto pt-12 mt-6">
						<HeroSection/>
				</section>

			{/* <pre>{JSON.stringify(session)}</pre> */}
			{/* blog section */}
				<section className='mt-10'>
					<hr/>
					<div className="w-[90%] mx-auto">
							{/* main blog container */}
							<h5 className=' text-3xl md:text-5xl font-normal uppercase m-5 text-center md:text-left'>top posts</h5>
							<div className="flex flex-wrap items-center gap-5">
								{/* <BlocksRenderer content={post} /> */}
								{
									data.map((item:any,i:any)=>{
										const post = item?.attributes
										return (
											<div key={i} className="w-full md:w-full lg:w-3/12">
												<article className="block rounded my-12 md:my-0">
													<Link className="mb-4 block" href={`/blog/${post.Slug}`}>
														<Image src={`${post?.img.data.attributes.formats.medium.url}`} alt="..." width={100} height={100} className="object-cover w-full h-full lg:h-56 mb-4 " quality="75" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='lazy'/>
													</Link>
													<span className="font-extra text-sm uppercase letter-spacing-1 text-[#ce8460]">{post?.category?.data?.attributes?.title}</span>
													<h3 className="post-title mt-1"><Link href={`/blog/${post.Slug}`}>{post.Title}</Link></h3>
													<p className='pt-5 pb-5 text-clip'>{post.Content[0].children[0].text.substring(1,100)+"..."}</p>
													<span className="letter-spacing text-uppercase font-sm tracking-[3px]">{new Date(post.updatedAt).toDateString()}</span>
												</article>
												<hr className='block md:hidden'/>
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
