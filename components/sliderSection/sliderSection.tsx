// import * as $ from 'jquery';

import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/lib/auth';
import { GET_POST_BY_SLUG, LATEST_POST } from '@/lib/blogPost/getPost';


const HeroSection = async()=>{
  
  const data = await LATEST_POST();

  const post = data?.attributes
  // console.log(post.Content[0].children[0].text)

  // console.log(post.img.data.attributes.formats.medium.url)

    // if(!post.ok) return <></>

    return (
        <>
              <div className="w-full flex flex-col lg:flex-row gap-8">
                <div className=" w-full lg:w-10/12 flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 w-full">
                    <Image src={post.img.data.attributes.formats.medium.url} className=' object-cover w-full h-[500px]' width={100} height={100} quality={75} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='lazy' alt={post.Title}/>
                  </div>
                  <div className='md:w-1/2 w-full'>
                    <Link href={`/blog/${post.Slug}`} className=' text-3xl md:text-5xl font-normal text-black'>{post.Title}</Link>
                    <div className='py-5'>
                      <span className="letter-spacing text-uppercase font-sm tracking-[3px]">{new Date(post.publishedAt).toDateString()}</span>
                    </div>
                    <p className=' font-normal text-lg'>{post.Content[0].children[0].text}</p>
                  </div>
                </div>
                <div className='lg:w-2/12 w-full flex flex-col'>
                  <div className=' font-normal text-xl border-b-2 border-black uppercase'>
                    latest trends
                  </div>
                  {
                    [1,2,3].map((i,j)=>{
                      return (
                        <div key={j} className='mt-0 mb-1 mx-0 pb-1'>
                            <Link href={'#'} className=' font-semibold text-sm text-black'>Simone Rocha&apos;s Take on Jean Paul Gaultier</Link>
                            <p className='border-neutral-300 box-border text-sm leading-[1.188rem] font-normal text-[rgb(29,29,27)]'>What do you get when you fuse an Irish-Chinese pagan feminist with a French couture house? Ask Simone Rocha. </p>
                            <div className='text-xs leading-4 mt-2'>
                            <span className="font-normal border-neutral-300 box-border text-xs leading-4 text-[rgb(153,153,153)] mr-4 border-0 border-solid">{new Date().toDateString()}</span>
                            </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
        </>
      );
}


export default HeroSection;




