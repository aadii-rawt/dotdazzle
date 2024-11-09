import React, { useState, useEffect } from 'react';
import { BsGridFill } from 'react-icons/bs';

const Header = () => {
    // State to track if the page is scrolled
    const [isScrolled, setIsScrolled] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        // Check if the page is scrolled more than 10 pixels
        setIsScrolled(window.scrollY > 200);
    };

    useEffect(() => {
        // Add scroll event listener on mount
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 p-5  transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : ' bg-transparent '
                }`}>
            <div className='max-w-[1280px] mx-auto flex items-center justify-between'>
                <div className='hidden md:block'>
                    <ul className='flex  gap-4 rounded-3xl bg-black text-white p-3 px-5 font-medium'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About us</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Project</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl md:text-4xl font-bold text-yellow-500'>.dazzle</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <button className='flex gap-4 rounded-3xl bg-black text-white p-2 md:p-3  px-3 md:px-5 font-medium'>
                        Contact us
                    </button>
                    <div className='md:hidden'>
                        <BsGridFill size={24}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
