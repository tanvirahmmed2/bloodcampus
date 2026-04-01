import Footer from '@/components/bar/Footer'
import Navbar from '@/components/bar/Navbar'
import React from 'react'

export const metadata={
    title:'Blood Campus | Home',
    description:'Blood Campus Home Page'
}

const PublicHomeLayout = ({ children }) => {
    return (
        <div className='w-full relative overflow-x-hidden'>
            <Navbar />
            {children}
            <Footer/>
        </div>
    )
}

export default PublicHomeLayout
