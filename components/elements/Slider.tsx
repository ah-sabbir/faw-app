import Image from 'next/image';
import { useState } from 'react';

const Slider = () => {
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1465145782865-09532f760e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyOTAzNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg3MjI0NDR8&ixlib=rb-4.0.3&q=80&w=2080',
      heading: 'Find Your Comfort Today!',
      subheader: 'Stay updated with the latest fashion trends, tips, and exclusive offers.',
        link: '/shop',
    },
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleNextImage = () => {
    const currentIndex = images.findIndex((image) => image.id === currentImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  return (
    <div className="relative">
      <Image src={currentImage.src} alt={currentImage.heading} height={500} width={500} className="w-full h-auto bg-blend-soft-light" />

      <div className=" bg-opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center md:p-8 md:bg-black md:rounded-3xl md:bg-opacity-50">
        <h2 className=" text-sm md:text-2xl font-bold text-white">{currentImage.heading}</h2>
        <p className="mt-4 mb-4 text-sm text-white md:p-2 md:m-2 md:text-lg">{currentImage.subheader}</p>
        <a
          href={currentImage.link}
          className="mt-4 px-2 py-2 bg-indigo-500 text-white rounded-lg shadow-lg md:mt-4 md:px-6 md:py-2"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Slider;
