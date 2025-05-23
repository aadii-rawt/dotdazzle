import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { HiColorSwatch, HiOutlineDeviceTablet } from 'react-icons/hi';
import { CgAwards, CgComponents, CgSearchFound } from 'react-icons/cg';
import { CiMobile3, CiMonitor } from 'react-icons/ci';
import { FaLink } from 'react-icons/fa';
import { DiIllustrator, DiPhotoshop } from 'react-icons/di';
import { IoBulbOutline, IoPhonePortraitOutline, IoTabletPortraitSharp } from 'react-icons/io5';
import { FiMonitor } from 'react-icons/fi';
import { SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';

const services = [
    {
        title: "Website",
        img: "./art_01.jpg"
    },
    {
        title: "Website",
        img: "./art_02.jpg"
    },
    {
        title: "Website",
        img: "./art_03.jpg"
    },
    {
        title: "Website",
        img: "./art_04.jpg"
    },
    {
        title: "Website",
        img: "./art_05.jpg"
    },
    {
        title: "Website",
        img: "./art_06.jpg"
    },
    {
        title: "Website",
        img: "./art_07.jpg"
    },
    {
        title: "Website",
        img: "./art_08.jpg"
    },
]

const cards = [
    {
        title: "Online store",
        description: "Sell anything. Upload your content and leave the hosting, checkout, and delivery to us.",
        background: "bg-blue-200",
        hoverBackground: "bg-blue-300",
    },
    {
        title: "Website",
        description: "Build a beautiful website in less than 10 minutes with professionally designed templates.",
        background: "bg-orange-200",
        hoverBackground: "bg-orange-300",
    },
    {
        title: "Email marketing",
        description: "Beautiful email marketing that works perfectly with your online store and website.",
        background: "bg-purple-200",
        hoverBackground: "bg-purple-300",
    },
];

const Services = () => {


    return (

        <section className='section relative'>
            <div className='max-w-[1280px] mx-auto overflow-hidden'>
                <h1 className='sm:text-4xl text-3xl font-russo text-center sm:mb-20 mb-8 relative z-30 '>Our Services</h1>
                <div className="relative overflow-hidden flex flex-col items-center md:flex-row justify-center p-6 pb-0">
                   <div
                        className={`relative overflow-hidden w-80 md:w-72 lg:w-96  text-left rounded-xl shadow-lg transform transition-transform duration-300 ease-in-out hover:-translate-y-2 -mr-16 group  bg-[#A5C8D8]  -rotate-[4deg] translate-y-4 cursor-pointer`}
                    >
                        <div className="absolute h-[0rem] w-[0rem] -z-10 rounded-full bg-[#10242F] duration-500 -top-20  -left-20  group-hover:h-[600px] group-hover:w-[34rem] transition-all ease-in-out"></div>
                        <div className='p-6'>
                            <h3 className="text-3xl text-[#10242F]  group-hover:text-[#A5C8D8] duration-500  font-semibold mb-2">SEO</h3>
                            <p className=" group-hover:text-[#A5C8D8]  text-[#10242F] duration-500">We help your website shine brighter in search results with thoughtful and effective SEO strategies tailored to your needs.</p>
                        </div>
                        <div className=' rounded-lg mt-4'>
                            <div className='flex gap-3 items-center bg-[#10242F] py-3 px-6 text-[#A5C8D8] group-hover:text-[#10242F]  group-hover:bg-[#A5C8D8] font-medium duration-500'>
                                <span><CgSearchFound size={20} /></span>
                                <h1>Keyword Research</h1>
                            </div>
                            <div className='flex gap-3 items-center text-[#10242F] group-hover:text-[#A5C8D8] py-3 px-6  group-hover:bg-[#10242F] font-medium duration-500'>
                                <span><CgComponents size={20} /></span>
                                <h1>Technical SEO</h1>
                            </div>
                            <div className='flex gap-3 items-center bg-[#10242F] py-3 px-6 text-[#A5C8D8] group-hover:text-[#10242F]  group-hover:bg-[#A5C8D8] font-medium duration-500'>
                                <span><CiMobile3 size={20} /></span>
                                <h1>Mobile SEO</h1>
                            </div>
                            <div className='flex gap-3 items-center text-[#10242F] group-hover:text-[#A5C8D8] py-3 px-6 bg-[#A5C8D8] group-hover:bg-[#10242F] font-medium duration-500'>
                                <span><CgAwards size={20} /></span>
                                <h1>SEO Audits</h1>
                            </div>
                            <div className='flex gap-3 items-center bg-[#10242F] py-3 px-6 text-[#A5C8D8] group-hover:text-[#10242F]  group-hover:bg-[#A5C8D8] font-medium'>
                                <span><FaLink size={20} /></span>
                                <h1>Link Building</h1>
                            </div>
                        </div>
                    </div>


                    <div
                        className={`relative sm:left-0 -left-8 -top-4 overflow-hidden w-80 md:w-72 lg:w-96 p-6 text-left rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:-translate-y-5 group bg-[#E39A4D]  cursor-pointer sm:rotate-0 rotate-6`}
                    >
                        <div className="absolute h-[0rem] w-[0rem] -z-10 rounded-full bg-[#452623] duration-500 -top-20  -left-20  group-hover:h-[600px] group-hover:w-[34rem] transition-all ease-in-out"></div>

                        <h3 className="text-3xl text-[#452623] group-hover:text-[#E39A4D] duration-500 font-semibold mb-2">Website</h3>
                        <p className=" text-[#452623] group-hover:text-[#E39A4D] duration-500">Build a clean, optimized, effective website with our team of web dev experts</p>

                        <div className='bg-[#452623] group-hover:bg-[#E39A4D] duration-500 p-3 rounded-lg mt-4'>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-1'>
                                    <div className='w-3 h-3 bg-[#E39A4D] group-hover:bg-[#452623] duration-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-[#E39A4D] group-hover:bg-[#452623] duration-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-[#E39A4D] group-hover:bg-[#452623] duration-500 rounded-full'></div>
                                </div>
                                <p className='text-[#E39A4D] group-hover:text-[#452623] duration-500 text-sm font-medium'>Website</p>
                            </div>
                            <div className='my-3 w-full h-44 bg-[#E39A4D] group-hover:bg-[#452623] duration-500 rounded-md relative'>
                            </div>
                        </div>
                    </div>


                    <div
                        className={`relative sm:right-0 -right-16 group cursor-pointer min-h-[430px] max-h-[430px] overflow-hidden w-80 md:w-72 lg:w-96 p-6 text-left rounded-xl shadow-lg transform transition-transform duration-300 ease-in-out hover:-translate-y-2 -ml-16  bg-[#CBB0EB] sm:rotate-[4deg] -rotate-6 sm:top-0 -top-16 translate-y-4`}>
                        <div className="absolute h-[0rem] w-[0rem] -z-10 rounded-full bg-[#1F1738] duration-500 -top-20  -left-20  group-hover:h-[600px] group-hover:w-[35rem] transition-all ease-in-out"></div>

                        <h3 className="text-3xl text-[#1F1738] group-hover:text-[#CBB0EB] duration-500 font-semibold mb-2">Graphic Design</h3>
                        <p className=" text-[#1F1738] group-hover:text-[#CBB0EB] duration-500 fon"> Transforms ideas into stunning visuals with creative and impactful graphic design services tailored to your brand.</p>
                        <div className='flex items-center justify-center mt-14 w-[500px] gap-3 overflow-hidden '>
                            <div className='w-40 h-40 bg-[#1F1738] group-hover:bg-[#CBB0EB] duration-500 rounded-3xl flex items-center justify-center relative'>
                                <h1 className='text-center text-[#CBB0EB] group-hover:text-[#1F1738] text-5xl font-serif font-bold'>
                                    Aa
                                </h1>

                                <SiAdobephotoshop size={24} className='absolute top-3 left-3 text-4xl rotate-6 text-[#CBB0EB] group-hover:text-[#1F1738]' />
                                <SiAdobeillustrator size={23} className='absolute bottom-3 right-3 text-4xl -rotate-6 text-[#CBB0EB] group-hover:text-[#1F1738]' />
                            </div>
                            <div className='w-40 h-40 bg-[#1F1738] group-hover:bg-[#CBB0EB] duration-500 rounded-full flex items-center justify-center'>
                                <HiColorSwatch className='text-[#CBB0EB] group-hover:text-[#1F1738] text-5xl' />
                            </div>
                            <div className='w-40 h-40 bg-[#1F1738] group-hover:bg-[#CBB0EB] duration-500 rounded-[50px]'></div>
                        </div>

                    </div>

                </div>
                <div className=" absolute bottom-[-100px] left-0 w-full h-[250px] bg-white rounded-t-[50%] sm:block hidden"></div>

                <img src="./www-icon.png" alt="browser icon" className='w-28 absolute sm:left-[20rem] md:left-[32rem] right-4 sm:top-48 bottom-[35rem] rotate-12' />
                <img src="./app-icon.png" alt="phone icon" className='w-28 absolute sm:left-40 right-5 sm:top-28 top-[13rem] ' />
                <img src="./tablet-icon.png" alt="tablet icon" className='w-28 absolute left- sm:right-24 sm:top-52 bottom-[5rem] ' />
            </div >
        </section >
    )
}

export default Services