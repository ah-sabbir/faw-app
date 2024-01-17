// import * as $ from 'jquery';

import Image from 'next/image';
import Link from 'next/link';
import GetLatestPost from '@/lib/blogPost/getLatestPost';
import {GetPostByFeatured, GET_CATEGORIES} from '@/lib/blogPost/getPostByFeatured';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/lib/auth';
import GET_POSTS from '@/lib/blogPost/getPostAll';


const HeroSection = async()=>{
  
  const { data, meta } = await GET_POSTS();
	const post = data[0]?.attributes
  const categories = await GET_CATEGORIES();

  //console.log(post.Slug)

    // if(!post.ok) return <></>

    return (
        <>
            <div className="py-12 min-h-screen"> {/* bg-gray-100  */}
              <div className="container mx-auto px-4 flex flex-col-reverse md:flex-col-reverse lg:flex-row">
                <div className=" max-w-[500px] lg:w-4/12">
                  {/* categories */}
                  <div className="bg-white shadow-sm rounded-sm p-4 hidden lg:block">
                      <h3 className="text-xl font-semibold uppercase text-gray-700 font-poppins mb-3">top trending</h3>
                        {
                          categories.data.map((item:any,i:any)=>{
                            return (
                            <div key={i} className=" space-y-2  font-semibold uppercase text-gray-700 ">
                              <Link href={`/category/${item.attributes.slug}`} className='flex items-center leading-4 transition'>
                                 <span className="mr-2">
                                    <i className="far fa-folder-open"></i>
                                 </span>
                                 <span>{item.attributes.title}</span>
                                 <span className="font-normal ml-auto">({item.id})</span>
                              </Link>
                            </div>
                            )
                          })
                        }
                  </div>

                  {/* random post */}
                    <div className="bg-white shadow-sm rounded-sm p-4 mt-8">
                    <h3 className="text-xl font-semibold text-gray-700 font-poppins mb-3">Feature Posts</h3>

                    <div className=' space-y-4'>
                        {
                          [1,2,3,4,5].map((item,i)=>{
                            return (
                              <Link key={i} href="#" className="gap-2 shadow-sm flex flex-row group lg:flex-row">
                                  <div className='flex-shrink-0'>
                                    <Image src={`https://images.unsplash.com/photo-1484327973588-c31f829103fe?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb`} width={100} height={100} alt=""  quality="75" className="w-full lg:w-20 h-20 rounded object-cover" loading='lazy'/>
                                  </div>
                                  <div className="flex-grow lg:pl-3">
                                    <h1 className="  text-sm md:text-xl font-normal group-hover:text-[#FDBA00] transition duration-500">{post.Title}</h1>
                                    <div className="flex text-gray-400 text-sm items-center">
                                      <span className="mr-1 text-xs">
                                        <i className="far fa-clock"></i>
                                      </span>
                                      {new Date(post.updatedAt).toDateString()}
                                    </div>
                                  </div>
                              </Link>
                            )
                          })
                        }
                      </div>
                    </div>
                </div>
                <div className="w-full lg:w-8/12 bg-white lg:mx-6">
                  <div className='relative'>
                  <Image 
                    src={`https://images.unsplash.com/photo-1484327973588-c31f829103fe?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb`} 
                    width={500}
                    height={500}
                    alt="" 
                    quality={100} 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    className="w-full h-full" 
                    />
                  <div className=" w-full">
                      <div className="post-content m-5">
                          <div className="post-cat">
                              <div className="post-cat-list">
                                  <a className="hover-flip-item-wrapper" href="#">
                                      <span className="hover-flip-item">
                                          <span data-text="LIFESTYLE">LIFESTYLE</span>
                                      </span>
                                  </a>
                              </div>
                          </div>
                          <h1 className="title font-bold text-xl sm:text-3xl md:text-5xl my-2"><Link href={`/blog/${post.Slug}`}>{post.Title}</Link></h1>
                          <p className="text-gray-500 text-sm md:text-base">{post.Content[0].children[0].text.substring(1,100)+"..." || ""}<span className='bold text-3xl'><Link href={`/blog/${post.Slug}`}>Read More</Link></span></p>
                          <div className="post-meta  my-5">
                              {/* <span className="post-author">
                                  <span className="post-author-name">
                                      <a href="#">{`sabbir ahmmed`}</a>
                                  </span>
                              </span> */}
                              <span className="letter-spacing text-uppercase font-sm tracking-[3px]">
                                  <a href="#">{new Date(post.updatedAt).toDateString()}</a>
                              </span>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
      );
}


export default HeroSection;




