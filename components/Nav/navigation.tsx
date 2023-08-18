"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import brandLogo from '@/assets/temp-logo.svg';
import { MagnifyingGlassIcon, ServerStackIcon } from '@heroicons/react/24/solid';



const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="w-full h-52 flex pr-10 pl-10 justify-between">
      <div id='brand' className='flex justify-center items-center'>
        <Link href='/' className=''>
            <Image
              src={brandLogo}
              alt='logo'
              width={100}
              height={100}
            />
        </Link>
      </div>

      <div id='menu' className='flex justify-end items-center'>
        <ul className='flex flex-row justify-between items-center gap-5 text-gray'>
          <li className='text-2xl font-bold text-white'>
            <Link href='/' className=' text-[#282828]  font-normal'>Home</Link>
          </li>
          <li className='text-2xl font-bold text-white'>
            <Link href='/about' className=' text-[#282828]  font-normal'>About</Link>
          </li>
          <li className='text-2xl font-bold text-white'>
            <Link href='/shop' className=' text-[#282828]  font-normal'>Shop</Link>
          </li>
          <li className='text-2xl font-bold text-white'>
            <Link href='/contact' className=' text-[#282828]  font-normal'>Contact</Link>
          </li>
        </ul>
      </div>

      <div id='auth-section' className='flex justify-center items-center'>
        <div id="search" className='flex justify-center items-center gap-2'>
          <button className=" w-8 h-8 flex justify-center items-center rounded-[50%] bg-white">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray" />
          </button>
          <Link href='/login'>
            <button className="flex items-center justify-center w-50 p-2 mr-2 focus:outline-none font-bold text-[#282828]">
              Log in
            </button>
          </Link>
          <Link href='/signup'>
            <button className="flex items-center justify-center w-200 h-10 p-5 mr-2 text-white rounded-md bg-[#404040] focus:outline-none font-bold">
              Sign up
            </button>
          </Link>
        </div>
        </div>
    </nav>
  );
};

export default Navigation;



