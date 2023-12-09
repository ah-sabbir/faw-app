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

    const menuHandler = (e:any) =>{
        alert('menu clicked');
        console.log(userInfo)
    }

  
    if(isBuilder || isAdmin ) return (<></>)

  return (
        <section className=" max-w-[1920px] w-full h-auto flex justify-center z-[999] sticky">
            {/* <!-- component --> */}
            <nav className=" max-w-[1260px] w-full flex justify-between px-[15px] py-10 lg:px-3 lg:py-5 lg:mt-3 items-center ">
                <Link href={"/"} className={`text-[32px] md:text-xl lg:5xl text-gray-900 px-5 uppercase hover:text-gray-900 font-extrabold`}>Fashion</Link>
                <div className="flex md:flex-auto items-center justify-between">
                    <ul className={`items-center space-x-6 hidden md:inline-flex uppercase text-[#555] font-bold`}>
                        <li className="font-semibold text-gray-700"><Link href={"#"}>Trends</Link></li>
                        <li className="font-semibold text-gray-700"><Link href={"#"}>Beauty & Makeup</Link></li>
                        <li className="font-semibold text-gray-700"><Link href={"#"}>Travel & Lifestyle</Link></li>
                        <li className="font-semibold text-gray-700"><Link href={"#"}>Style Diary</Link></li>
                    </ul>
                    <div className={`flex items-center font-extrabold relative`}>
                        <FaSearch className="h-5 w-5 text-black mx-3 cursor-pointer" onClick={()=>console.log("search icon")}/>
                        <FaBars className="h-5 w-5 text-black mx-3 cursor-pointer" onClick={menuHandler}/>
                        {
                            isAuthenticated && (
                                <>
                                    <FaUser className="h-5 w-5 text-black mx-3 cursor-pointer" onClick={()=> setIsUser(!isUser)}/>
                                    <div className={` min-w-[200px] flex flex-col gap-1 p-5 m-5 h-auto bg-white border-2 rounded-md z-[1000] absolute top-[40px] right-0 ${isUser? 'block':'hidden'}`}>
                                        {/* <span className=''>{userInfo.first_name+' '+userInfo.last_name}</span>
                                        <span className=''>{userInfo.email}</span> */}
                                        <Link href={`/blog/builder`} className='text-[#ce8460]'>Create Post</Link>
                                        <Link href={`/admin`} className='text-[#ce8460]'>Dashboard</Link>
                                        <button className='bg-[#ce8460] text-white p-2 rounded-md' onClick={()=>signOut()}>Logout</button>
                                    </div>
                                </>
                            ) 
                        }
                        
                    </div>
                </div>
            </nav>
    </section>

  )
}




export default RootHeader;