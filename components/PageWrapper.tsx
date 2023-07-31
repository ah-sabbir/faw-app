"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import Navigation from './elements/navigation'

const PageWrapper = ({children}:any) => {
    const path = usePathname()
    const isDashboard = path.split('/').includes('dashboard')
  return (
    <>
        {
        isDashboard ? 
        <>
            { children }
        </>
        :<>
            <Navigation />
            { children }
        </>
    } 
    </>
  )
}

export default PageWrapper