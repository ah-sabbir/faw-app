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


const ImageSlider = async()=>{
  
    const post = await GetLatestPost();

    if(!post.ok) return <></>

    return (
        <>
          <div className=' max-w-[1920px] w-full  relative py-3 mt-11'>
            {/* <div className='max-w-[1260px] w-full flex items-center flex-nowrap flex-col md:flex-row gap-3 px-[15px] mx-auto'> flex-col md:flex-row gap-1 */}
            <div className='max-w-[1260px] w-full flex-nowrap px-[15px] mx-auto relative'>
            {/* <Image src={post.coverimg} alt={post.title} width={100} height={100} className="block mb-4 w-full h-full rounded-[10px]" quality="85" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/> */}
            <Image src={post.coverimg} alt={post.title} width={100} height={100} className="block mb-4 w-full h-full rounded-[10px]" quality="85" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            {/* <div className='w-full h-full flex items-center justify-center'> */}
            <div className="w-full max-h-[400px] h-full flex items-end justify-center absolute left-0 bottom-0 p-3">
              {/* <h1 className='font-normal md:text-5xl lg:text-6xl lg:text-left lg:leading-snug'><Link href={"/blog/"+post.slug || "#"}>{post.title}</Link></h1> */}
              <h1 className='font-normal text-center text-white'><Link href={"/blog/"+post.slug || "#"}>{post.title}</Link></h1>
            </div>
            {/* </div> */}
            </div>
          </div>
        </>
      );
}


export default ImageSlider;