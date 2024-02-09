// import * as $ from 'jquery';

import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/lib/auth';
import { LATEST_POST } from '@/lib/blogPost/getPost';


const HeroSection = async()=>{
  
  const data = await LATEST_POST();

  const post = data?.attributes

  const imgHash = post?.img?.data?.attributes?.hash
  const ext = post?.img?.data?.attributes?.ext
  const imgURL = post?.img?.data?.attributes?.url.split("upload")[0]+"upload/f_auto/"+imgHash+ext

  // console.log(post.content[0].children[0].text +": "+ post.content[1].children[0].text)

    return (
        <>
              {/* <!-- Ezoic - top_of_page - top_of_page --> */}
              <div id="ezoic-pub-ad-placeholder-103"> </div>
              {/* <!-- End Ezoic - top_of_page - top_of_page --> */}
              <div className="w-full flex flex-col lg:flex-row gap-8">
                <div className=" w-full lg:w-10/12 flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 w-full">
                    <Image src={imgURL} className=' object-cover w-full h-[500px]' width={500} height={500} quality={75} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={post.Title}/>
                  </div>
                  <div className='md:w-1/2 w-full'>
                    <Link href={`/blog/${post.slug}`} className=' text-3xl md:text-5xl font-normal text-black'>{post.title}</Link>
                    <div className='py-5'>
                      <span className="letter-spacing text-uppercase font-sm tracking-[3px]">{new Date(post.publishedAt).toDateString()}</span>
                    </div>
                    <p className=' font-normal text-lg'>{post.content[0].children[0].text +": "+ post.content[1].children[0].text}</p>
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




