'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import logo from '@/images/logo.png';
import logo from '@/app/brand-logo.png'
import {FaBars, FaFacebookF, FaLinkedinIn, FaPinterest, FaTwitter, FaUser, FaSearch} from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { getSession, signOut, useSession} from 'next-auth/react';
// import { poppins_lg, poppins_md } from '@/fonts/fonts';


const RootHeader = () => {
    const session = useSession();
    const path = usePathname()
    const isAdmin = path.split('/').includes('admin')
    const isBuilder = path.split('/').includes('builder')
    const isAccess = path.split('/').includes('access')
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<any>({});
    const [isUser, setIsUser] = useState<boolean>(false);


    useEffect(() => {
        if (session?.status === "authenticated") {
            setIsAuthenticated(true)
            setUserInfo(session?.data?.user)
        }
    }, [session])

    const [top, setTop] = useState(true);

    useEffect(() => {
    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    const menuHandler = (e:any) =>{
        alert('menu clicked');
        console.log(userInfo)
    }

  
    if(isBuilder || isAdmin || isAccess ) return (<></>)

  return (
        <section className={`w-full h-auto flex justify-center ite z-20 fixed top-0 left-0 bg-white py-3 mx-auto ${!top && 'shadow-lg'} ${top && 'divide-x-2'}`}>
            <div className='w-[90%] mx-auto'>
                <nav className="w-full flex justify-between items-center ">
                    <Link href={"/"} className={`text-[32px] md:text-xl lg:5xl text-gray-900 px-5 uppercase hover:text-gray-900 font-extrabold`}>
                        <Image src={'/static/logos/fashionanywhere-logo.webp'} width={50} height={50} alt={'...'} className='w-[36px]'/>
                    </Link>
                    <div className="flex md:flex-auto items-center justify-between">
                        <ul className={`items-center space-x-6 hidden md:inline-flex uppercase text-[#555] font-bold text-[13px] lg:text-[16px]`}>
                            <li className="font-semibold text-gray-700"><Link href={"/trends"}>Trends</Link></li>
                            <li className="font-semibold text-gray-700"><Link href={"/beauty-and-makeover"}>Beauty & Makeup</Link></li>
                            <li className="font-semibold text-gray-700"><Link href={"/travel-and-lifestyle"}>Travel & Lifestyle</Link></li>
                            <li className="font-semibold text-gray-700"><Link href={"/style-diary"}>Style Diary</Link></li>
                        </ul>
                        <div className={`flex items-center font-extrabold relative`}>
                            <FaBars className="h-5 w-5 text-black mx-2 cursor-pointer" onClick={menuHandler}/>
                            {/* {
                                isAuthenticated && (
                                    <>
                                        <FaUser className="h-4 w-4 text-black mx-1 cursor-pointer" onClick={()=> setIsUser(!isUser)}/>
                                        <div className={` min-w-[200px] flex flex-col gap-1 p-5 m-5 h-auto bg-white border-2 rounded-md z-[1000] absolute top-[40px] right-0 ${isUser? 'block':'hidden'}`}>
                                            <Link href={`/blog/builder`} className='text-[#ce8460]'>Create Post</Link>
                                            <Link href={`/admin`} className='text-[#ce8460]'>Dashboard</Link>
                                            <button className='bg-[#ce8460] text-white p-2 rounded-md' onClick={()=>signOut()}>Logout</button>
                                        </div>
                                    </>
                                ) 
                            }
                            <FaSearch className="h-4 w-4 text-black mx-2 cursor-pointer text-red" onClick={()=>console.log("search icon")}/>
                            <Link href="#" className="py-1  hidden md:block lg:block"><FaFacebookF className="h-4 w-4 text-[#316FF6] mx-2 cursor-pointer hidden md:block lg:block"/></Link>
                            <Link href="#" className="py-1  hidden md:block lg:block"><Image src="/static/logos/twitter-x-logo.png" width={15} height={15} alt="..." /></Link>
                            <Link href="#" className="py-1  hidden md:block lg:block"><FaPinterest className="h-4 w-4 text-red-500 mx-2 cursor-pointer hidden md:block lg:block"/></Link> */}
                            
                        </div>
                    </div>
                </nav>
            </div>
    </section>

  )
}




export default RootHeader;