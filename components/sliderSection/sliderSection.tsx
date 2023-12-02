// import * as $ from 'jquery';

import Image from 'next/image';
import Link from 'next/link';


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


const ImageSlider = async({slug,img,title}:Props)=>{
  
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        <>
          <div className=' max-w-[1920px] w-full  relative bg-[#D5D2C5] py-3'>
            <div className='max-w-[1260px] w-full flex items-center flex-nowrap flex-col md:flex-row gap-3 px-[15px] mx-auto'> {/* flex-col md:flex-row gap-1 */}
            <Image src={img} alt={title} width={100} height={100} className="block mb-4 w-full h-full" quality="85" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            <div className='w-full h-full flex items-center justify-center'>
              <h1 className='lg:text-6xl lg:text-left lg:font-normal lg:leading-snug'><Link href="/">{title}</Link></h1>
            </div>
            </div>
          </div>
        </>
      );
}


export default ImageSlider;