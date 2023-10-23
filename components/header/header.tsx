'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import logo from '@/images/logo.png';
import logo from '@/app/brand-logo.png'

import {FaBars, FaFacebookF, FaLinkedinIn, FaPinterest, FaTwitter} from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const RootHeader = () => {
    const path = usePathname()
    const isAdmin = path.split('/').includes('admin')
    const isLogin = path.split('/').includes('signin')
    const isRegister = path.split('/').includes('register')
    const isForgotPassword = path.split('/').includes('forgot-password')
    const isResetPassword = path.split('/').includes('reset-password')
    const isVerifyEmail = path.split('/').includes('verify-email')
    const isVerifyEmailSuccess = path.split('/').includes('verify-email-success')
    const isBuilder = path.split('/').includes('builder')

    if(isBuilder || isForgotPassword || isResetPassword || isVerifyEmail || isVerifyEmailSuccess || isRegister || 
        isLogin) return (<></>)

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
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
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