// import * as $ from 'jquery';

import Image from 'next/image';
import Link from 'next/link';

import './sliderSection.module.css';





import img1 from '@/images/slider/slide1.jpg'
import img2 from '@/images/slider/slide2.jpg'
import img3 from '@/images/slider/slide3.jpg'


const options = {
  loop: true,
  margin: 10,
  items: 1,
  autoplay: true,
};


const data = [
    {
        image: "https://images.unsplash.com/photo-1478118330274-ff72cf1161a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Lifestyle",
        title: "Tips for Taking a Long-term Trip",
        date: "January 2, 2019",
        URL: "/1"
    },
    {
        image: "https://images.unsplash.com/photo-1478118330274-ff72cf1161a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Lifestyle",
        title: "Tips for Taking a Long-term Trip",
        date: "January 2, 2019",
        URL: "/1"
    },
    {
        image: "https://images.unsplash.com/photo-1478118330274-ff72cf1161a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Lifestyle",
        title: "Tips for Taking a Long-term Trip",
        date: "January 2, 2019",
        URL: "/1"
    },
]


const ImageSlider = ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        <>
          <div className='w-full  relative '>
            <div className='w-full flex flex-nowrap flex-col md:flex-row gap-2 px-[15px] mx-auto md:max-w-3xl lg:max-w-7xl'> {/* flex-col md:flex-row gap-1 */}
                <div className='w-full md:w-4/12 lg:w-4/12'>
                    <Image src={img3} className='w-full h-full' width={100} height={100} alt='...' loading='lazy' quality="85" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" placeholder='blur'/>
                </div>
                <div className='w-full md:w-4/12 lg:w-4/12'>
                    <Image src={img2} className='w-full h-full' width={100} height={100} alt='...' loading='lazy' quality="85" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" placeholder='blur'/>
                </div>
                <div className='w-full md:w-4/12 lg:w-4/12'>
                    <Image src={img1} className='w-full h-full' width={100} height={100} alt='...' loading='lazy' quality="85" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" placeholder='blur'/>
                </div>
            </div>
                <div className=' p-1 mx-10 flex flex-col items-center justify-center bg-white  bottom-0 left-[35%]'>
                  <h3 className='text-[#D06718] p-1 font-thin'>Explore</h3>
                  <h2 className='pl-1 pr-5 py-2 text-[#3D3D4E] text-[48px] md:text-[32px]'>Your Style</h2>
                  <h1 className='pl-1 pr-5 py-2 text-[#3D3D4E] text-[25px] md:text-[38px]'>Anywhere Everywhere</h1>
                </div>
          </div>
        </>
      );
}



export default ImageSlider;