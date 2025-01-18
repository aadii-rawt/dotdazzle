import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Layout() {
    return (
        <div className='relative'>
            <Header />
            <Outlet />
            <Footer />

            {/* whatsapp fixed icon */}
            <div>
                <a href="https://wa.me/+919599518124" target='_blank'>
                    <img src="./social.png" alt="whatsapp" className='w-12 sm:w-12 md:w-16 fixed bottom-5 right-5' />
                </a>
            </div>
        </div>
    )
}

export default Layout