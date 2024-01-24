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

  // console.log(categories.data)

    // if(!post.ok) return <></>

    return (
        <>
              <div className="w-full flex flex-col lg:flex-row gap-8">
                <div className=" w-full lg:w-10/12 flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 w-full">
                    <Image src={'https://images.unsplash.com/photo-1484327973588-c31f829103fe?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'} className='w-full h-full' width={500} height={500} quality={75} alt="..."/>
                  </div>
                  <div className='md:w-1/2 w-full'>
                    <Link href={'#'} className=' text-3xl md:text-5xl font-normal text-black'>Simone Rocha&apos;s Take on Jean Paul Gaultier</Link>
                    <div className='py-5'>
                      <span className="letter-spacing text-uppercase font-sm tracking-[3px]">{new Date().toDateString()}</span>
                    </div>
                    <p className=' font-normal text-lg'>What do you get when you fuse an Irish-Chinese pagan feminist with a French couture house? Ask Simone Rocha. She&apos;s the latest &apos;guest&apos; designer to be invited by Jean Paul Gaultier to bring her own spin to his remarkable legacy.</p>
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




