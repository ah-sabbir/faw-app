'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'



export const FooterSection = () => {
    const path = usePathname()
    const isAdmin = path.split('/').includes('admin')
    const isLogin = path.split('/').includes('signin')
    const isRegister = path.split('/').includes('register')
    const isForgotPassword = path.split('/').includes('forgot-password')
    const isResetPassword = path.split('/').includes('reset-password')
    const isVerifyEmail = path.split('/').includes('verify-email')
    const isVerifyEmailSuccess = path.split('/').includes('verify-email-success')
    const isBuilder = path.split('/').includes('builder')
    const isAccess = path.split('/').includes('access')

    if(isBuilder || isForgotPassword || isResetPassword || isVerifyEmail || isVerifyEmailSuccess || isRegister || isAdmin ||
        isLogin || isAccess) return (<></>)


        
  return (
    <>
        <section className="bg-[#f5f5f5]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Subscribe Newsletter</h2>
                <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Subscribe my Newsletter for new blog posts , tips and info.</p>
                <form action="#">
                    <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div className="relative w-full">
                            <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input className="block p-3 pl-10 w-full text-sm text-[#ce8460] bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required/>
                        </div>
                        <div>
                            <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-[#ce8460] border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                        </div>
                    </div>
                    <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
                </form>
            </div>
        </div>
        <div className="w-full relative bottom-0">
                        <div className="w-full items-center justify-center">
                            <div className="w-full">
                                <ul className="flex flex-col items-center justify-center md:flex-row">
                                    <li className="list-inline-item"><Link href="#">Privacy policy</Link></li>
                                    <li className="list-inline-item"><Link href="#">Support</Link></li>
                                    <li className="list-inline-item"><Link href="#">About</Link></li>
                                    <li className="list-inline-item"><Link href="#">Contact</Link></li>
                                    <li className="list-inline-item"><Link href="#">Terms</Link></li>
                                    <li className="list-inline-item"><Link href="#">Category</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="copyright text-center ">
                                    @ copyright all reserved to <Link href="https://fashionanywhere.shop/">fashionanywhere.shop</Link>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>
    </>
  )
}
