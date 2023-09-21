'use client'

// import * as $ from 'jquery';
import Image from 'next/image';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './sliderSection.module.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



import slider1 from '@/images/slider/slider1.jpg'
import slider2 from '@/images/slider/slider2.jpg'
import slider3 from '@/images/slider/slider3.jpg'
import Link from 'next/link';


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
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
            {
                data.map((d,i)=>{
                    return (
                        <SwiperSlide key={i} className="item">
                            <div className=" max-w-full lg:max-h-min relative">
                                    <Image src={d.image} alt="" width={100} height={100} className="object-fill w-full"/>
                            </div>
    
                            <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:bg-opacity-[0.70] flex bg-black bg-transparent rounded flex-col p-3 m-auto">
                                <span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">{d.category}</span>
                                <h2 className="my-2  md:text-white"><Link href={d.URL}>{d.title}</Link></h2>
                                <p className='my-2  md:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, voluptas est! Officia suscipit odit porro unde optio magnam perferendis minus velit corporis, odio, similique, quidem dolor pariatur reiciendis quasi. Velit.</p>
                                <span className=" uppercase">{d.date}</span>
                            </div>
                    </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </>
      );
}



export default ImageSlider;