"use client"

import { usePathname } from 'next/navigation'

const PageWrapper = ({children}:any) => {
    const path = usePathname()
    const isAdmin = path.split('/').includes('admin')
    const isLogin = path.split('/').includes('signin')
    const isRegister = path.split('/').includes('register')
    const isForgotPassword = path.split('/').includes('forgot-password')
    const isResetPassword = path.split('/').includes('reset-password')
    const isVerifyEmail = path.split('/').includes('verify-email')
    const isVerifyEmailSuccess = path.split('/').includes('verify-email-success')
    const isBuilder = path.split('/').includes('builder')

    // if(isBuilder) return (<>{children}</>)
    
  return (
    <>
      {
        isBuilder || isForgotPassword || isResetPassword || isVerifyEmail || isVerifyEmailSuccess || isRegister || 
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
            { children }
        </>)
      }
    </>
  )
}

export default PageWrapper