import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
// import logo from '@/images/logo.png';
import logo from '@/app/brand-logo.png'

const RootHeader = () => {
  return (
        <header className="bg-[#f8efea] w-full h-[92px] relative justify-center">
            <div className="w-full h-full flex flex-wrap items-center justify-between px-[30px]"> 
                <div className='w-[96px] h-[96px] rounded-[50%]'>
                    <Link href="#">
                        <Image src={logo} alt="" width={100} height={100} className='w-full h-full'/>
                    </Link>
                </div>

                <button className="lg:hidden" type="button">
                    <span className="ti-menu font-semibold text-4xl"></span>
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
                            <li className='block mr-[0.5px]'><Link href="#" className='px-1 mx-1'><i className="ti-facebook text-base"></i></Link></li>
                            <li className='block mr-[0.5px]'><Link href="#" className='px-1 mx-1'><i className="ti-twitter text-base"></i></Link></li>
                            <li className='block mr-[0.5px]'><Link href="#" className='px-1 mx-1'><i className="ti-linkedin text-base"></i></Link></li>
                            <li className='block mr-[0.5px]'><Link href="#" className='px-1 mx-1'><i className="ti-pinterest text-base"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
    </header>

  )
}


export default RootHeader;