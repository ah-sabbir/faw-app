'use client';
import Link from 'next/link';
import React from 'react'
import { PhoneIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation'

import Image from 'next/image';
import FacebookIcon from '@/assets/icons/facebook.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import PinterestIcon from '@/assets/icons/pinterest.svg';
import EmailIcon from '@/assets/icons/email.svg';


const StickyNavbar = () => {
  const path = usePathname();
  const isHome = path.split('/')[1] === '';
  console.log(isHome);
  if (isHome===false) return <div className='none'></div>;
  return isHome && (
    <div className="w-full h-8 bg-purple-500 fixed top-0 left-0 z-10">
      <div className="w-full h-full pr-5 pl-5 m-auto flex items-center justify-between">
      <div className="w-40 h-3.5 flex gap-2 justify-center">
        <PhoneIcon className="fa-solid fa-phone text-white"/>
        <div className="w-32 text-white text-sm font-normal leading-none">
          <Link href="tel:+880123456789">
          +880 123 456 789
          </Link>
          </div>
      </div>
      <div className="w-40 flex">
        <div className="w-32 text-white text-sm font-normal leading-none">
          <Link href="https://facebook.com">
              <Image src={FacebookIcon} alt="facebook" width={20} height={20} />
          </Link>
        </div>
        <div className="w-32 text-white text-sm font-normal leading-none">
          <Link href="https://instagram.com">
              <Image src={InstagramIcon} alt="instagram" width={20} height={20} />
          </Link>
        </div>
        <div className="w-32 text-white text-sm font-normal leading-none">
          <Link href="https://pinterest.com">
              <Image src={PinterestIcon} alt="pinterest" width={20} height={20} />
          </Link>
        </div>
        <div className="w-32 text-white text-sm font-normal leading-none">
          <Link href="mailto:ahsabbir103@gmail.com">
              <Image src={EmailIcon} alt="email" width={20} height={20} />
          </Link>
        </div>

      </div>
      </div>
    </div>
  )
}


export default StickyNavbar;