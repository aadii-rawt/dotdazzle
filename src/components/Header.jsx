import React, { useState, useEffect } from 'react';
import { BsGridFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 p-5 py-3  transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : ' bg-transparent '
                }`}>
            <div className='max-w-[1280px] mx-auto flex items-center justify-between'>
                <nav className='flex items-center'>
                    <div className=' mr-4'>
                        <img src="./dotdazzle-logo.svg" alt='dotdazzle logo' title='logo of dotdazzle' className='w-24 md:w-28' />
                    </div>
                </nav>
                    <ul className='hidden md:flex gap-4 rounded-3xl bg-black text-white p-3 px-5 font-medium'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='#about'>About us</a></li>
                        <li><a href='#project'>Projects</a></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>

                <div className='flex items-center gap-3'>
                    <a href="https://wa.me/+919599518124" className='flex gap-4 rounded-3xl bg-black text-white p-2 md:p-3  px-3 md:px-5 font-medium' target='_blank'>
                    Contact us</a>
                    {/* <div className='md:hidden'>
                        <BsGridFill size={24} /> */}
                        {/* <div>
                            <div>
                            <img src="./dotdazzle-logo.png" alt='dotdazzle logo' title='logo of dotdazzle' className='w-24 md:w-28' />

                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </header>
        
    );
};

export default Header;
