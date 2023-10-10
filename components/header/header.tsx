'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
// import logo from '@/images/logo.png';
import logo from '@/app/brand-logo.png'

import {FaBars, FaFacebookF, FaLinkedinIn, FaPinterest, FaTwitter} from 'react-icons/fa';

const RootHeader = () => {

    const menuHandler = (e:any) =>{
        alert('menu clicked');
    }

  return (
        <header className="bg-[#f8efea] w-full h-[92px] relative justify-center">
            <div className="w-full h-full flex flex-wrap items-center justify-between px-[30px]"> 
                <div className='w-[64px] h-[64px] rounded-[50%]'>
                    <Link href="#" className='w-full h-auto'>
                        <Image src={logo} alt="Fashion anywhere" width={100} height={100} className=' object-cover' />
                    </Link>
                </div>

                <button className="lg:hidden" type="button" onClick={menuHandler}>
                    <i className='fa-solid fa-bars'></i><FaBars/>
                </button>
            
                <nav className="hidden md:hidden lg:flex lg:justify-center lg:items-center">
                    <ul className='flex gap-2'>
                        <li className='p-2 m-2 font-semibold uppercase'> 
                            <Link className="" href="/">Home</Link>
                        </li>                       
                        <li className='p-2 m-2 font-semibold uppercase'> 
                            <Link className="" href="/cultures">CULTURES</Link>
                        </li>
                        <li className='p-2 m-2 font-semibold uppercase'> 
                            <Link className="" href="/trends">TRENDS</Link>
                        </li>
                        <li className='p-2 m-2 font-semibold uppercase'> 
                            <Link className="" href="/beauty">BEAUTY</Link>
                        </li>
                        <li className='p-2 m-2 font-semibold uppercase'> 
                            <Link className="" href="/outfits">Outfits</Link>
                        </li>
                        <li className='p-2 m-2 font-semibold uppercase'> 
                            <Link className="" href="/aboutus">About Us</Link>
                        </li>
                    </ul>
                </nav>

                <div className="hidden lg:block lg:max-w-full lg:relative lg:min-h-[1px] lg:px-4">
                    <div className=" text-start">
                        <ul className="flex pl-0 list-none">
                            <li className='block mr-1 pr-1 pl-1'><Link href="#" className='px-1 mx-1'><FaFacebookF width={35} height={35}/></Link></li>
                            <li className='block mr-1 pr-1 pl-1'><Link href="#" className='px-1 mx-1'><FaTwitter width={35} height={35}/></Link></li>
                            <li className='block mr-1 pr-1 pl-1'><Link href="#" className='px-1 mx-1'><FaLinkedinIn width={35} height={35}/></Link></li>
                            <li className='block mr-1 pr-1 pl-1'><Link href="#" className='px-1 mx-1'><FaPinterest width={35} height={35}/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
    </header>

  )
}


export default RootHeader;