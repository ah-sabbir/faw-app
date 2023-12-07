'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import logo from '@/images/logo.png';
import logo from '@/app/brand-logo.png'
import {FaBars, FaFacebookF, FaLinkedinIn, FaPinterest, FaTwitter, FaUser, FaSearch} from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { getSession, signOut} from 'next-auth/react';
import { poppins_lg, poppins_md } from '@/fonts/fonts';


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
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<any>({});


    useEffect(() => {
        getSession().then((session)=> {
            session?.user && setIsAuthenticated(true)
            // console.log(session?.user)
            setUserInfo(session?.user)
        });
    }, [])

    const menuHandler = (e:any) =>{
        alert('menu clicked');
    }

  
    if(isBuilder || isForgotPassword || isResetPassword || isVerifyEmail || isVerifyEmailSuccess || isRegister || isAdmin ||
        isLogin) return (<></>)

  return (
        <section className=" max-w-[1920px] w-full h-auto flex justify-center z-[999] sticky">
            {/* <!-- component --> */}
            <nav className=" max-w-[1260px] w-full flex justify-between px-[15px] py-10 lg:px-3 lg:py-5 lg:mt-3 items-center ">
                <Link href={"/"} className={`text-xl md:text-xl lg:5xl text-gray-900 font-bold px-5 uppercase hover:text-gray-900  ${poppins_lg.className}`}>Fashion</Link>
                <div className="flex md:flex-auto items-center justify-between">
                    <ul className={`items-center space-x-6 hidden md:inline-flex uppercase text-[#555] ${poppins_md.className}`}>
                        <li className="font-semibold text-gray-700"><Link href={"#"}>Trends</Link></li>
                        <li className="font-semibold text-gray-700"><Link href={"#"}>Beauty & Makeup</Link></li>
                        <li className="font-semibold text-gray-700"><Link href={"#"}>Travel & Lifestyle</Link></li>
                        <li className="font-semibold text-gray-700"><Link href={"#"}>Style Diary</Link></li>
                    </ul>
                    <div className={`flex items-center ${poppins_lg}`}>
                        <FaSearch className="h-5 w-5 text-black mx-3 cursor-pointer" onClick={()=>console.log("search icon")}/>
                        <FaBars className="h-5 w-5 text-black mx-3 cursor-pointer" onClick={menuHandler}/>
                    </div>
                </div>
            </nav>
    </section>

  )
}




export default RootHeader;