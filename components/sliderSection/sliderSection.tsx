// import * as $ from 'jquery';

import Image from 'next/image';
import Link from 'next/link';
import GetLatestPost from '@/lib/blogPost/getLatestPost';

const options = {
  loop: true,
  margin: 10,
  items: 1,
  autoplay: true,
};


interface Props {
    img: string;
    title: string;
    slug?: string;
}


const HeroSection = async()=>{
  
    const post = await GetLatestPost();

    if(!post.ok) return <></>

    return (
        <>
            <div className="py-12 bg-gray-100 min-h-screen">
              <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row">
                <div className="w-full md:w-4/12">
                  {/* categories */}
                  <div className="bg-white shadow-sm rounded-sm p-4 xsm:hidden">
                      <h3 className="text-xl font-semibold text-gray-700 font-poppins mb-3">Categories</h3>
                        {
                          [1,2,3,4,5].map((item,i)=>{
                            return (
                            <div key={i} className=" space-y-2  font-semibold uppercase text-gray-700 ">
                              <Link href="#" className='flex items-center leading-4 transition'>
                                 <span className="mr-2">
                                    <i className="far fa-folder-open"></i>
                                 </span>
                                 <span>Beauty</span>
                                 <span className="font-normal ml-auto">({item})</span>
                              </Link>
                            </div>
                            )
                          })
                        }
                  </div>

                  {/* random post */}
                    <div className="bg-white shadow-sm rounded-sm p-4 mt-8">
                    <h3 className="text-xl font-semibold text-gray-700 font-poppins mb-3">Random Posts</h3>

                    <div className=' space-y-4'>
                        {
                          [1,2,3,4,5].map((item,i)=>{
                            return (
                              <Link key={i} href="#" className="gap-2 flex flex-row md:flex-col group lg:flex-row">
                                  <div className='flex-shrink-0'>
                                    <Image src={post.coverimg} width={100} height={100} alt="" className="w-full lg:w-20 h-20 rounded object-cover" />
                                  </div>
                                  <div className="flex-grow lg:pl-3">
                                    <h5 className="text-small text-normal md:text-md leading-[14px] md:leading-5 font-poppins font-semibold group-hover:text-[#FDBA00] transition duration-500">{post.title}</h5>
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
                <div className="w-full md:w-8/12 bg-white md:mx-6">
                  <div className='relative pb-[30px] mt-[30px]'>
                  <Image src={post.coverimg} width={100} height={100} alt="" quality={100} className="w-full h-auto object-cover rounded-sm relative" />
                  <div className="w-auto absolute bottom-0 z-10 left-0 right-0 px-[25px] md:relative">
                      <div className="post-content p-[30px] bg-white shadow-md  rounded-[10px]">
                          <div className="post-cat">
                              <div className="post-cat-list">
                                  <a className="hover-flip-item-wrapper" href="#">
                                      <span className="hover-flip-item">
                                          <span data-text="LIFESTYLE">LIFESTYLE</span>
                                      </span>
                                  </a>
                              </div>
                          </div>
                          <h4 className="title"><a href="post-details.html">{post.title}</a></h4>
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




