"use client"

import { usePathname } from 'next/navigation'
import Navigation from './elements/navigation'

const PageWrapper = ({children}:any) => {
    const path = usePathname()
    const isAdmin = path.split('/').includes('admin')
    const isLogin = path.split('/').includes('signin')
    const isRegister = path.split('/').includes('register')
    const isForgotPassword = path.split('/').includes('forgot-password')
    const isResetPassword = path.split('/').includes('reset-password')
    const isVerifyEmail = path.split('/').includes('verify-email')
    const isVerifyEmailSuccess = path.split('/').includes('verify-email-success')
    
  return (
    <>
      {
        isLogin? 
        <>
        { children }
        </>
        :

        (isAdmin ? 
        <>
            { children }
        </>
        :<>
            <Navigation />
            { children }
        </>)
      }
    </>
  )
}

export default PageWrapper