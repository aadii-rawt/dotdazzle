import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { HiColorSwatch } from 'react-icons/hi';

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

        <div className='section relative'>
            <div className='max-w-[1280px] mx-auto'>
                <h1 className='text-4xl font-russo text-center mb-20 '>Our Services</h1>
                <div className="relative overflow-hidden flex flex-col items-center md:flex-row justify-center p-6 ">
                    <div
                        className={`relative overflow-hidden w-80 md:w-72 lg:w-96 p-6 text-left rounded-xl shadow-lg transform transition-transform duration-300 ease-in-out hover:-translate-y-2 -mr-16 group bg-[#10242F] group-hover:bg-[#A5C8D8] -rotate-[4deg] translate-y-4 cursor-pointer`} >
                        <div className="absolute h-[0rem] w-[0rem] -z-10 rounded-full bg-[#A5C8D8] duration-500 -top-20  -left-20  group-hover:h-[550px] group-hover:w-[34rem] transition-all ease-in-out"></div>
                        <h3 className="text-3xl text-[#A5C8D8] group-hover:text-[#10242F] duration-500  font-semibold mb-2">App</h3>
                        <p className=" text-[#A5C8D8] group-hover:text-[#10242F] duration-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem earum eius error placeat consequatur corrupti.</p>
                        <div className='bg-[#A5C8D8] group-hover:bg-[#10242F] duration-500 p-3 rounded-lg mt-4'>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-1'>
                                    <div className='w-3 h-3 bg-[#10242F] group-hover:bg-[#A5C8D8] duration-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-[#10242F] group-hover:bg-[#A5C8D8] duration-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-[#10242F] group-hover:bg-[#A5C8D8] duration-500 rounded-full'></div>
                                </div>
                                <p className='text-[#10242F] group-hover:text-[#A5C8D8] duration-500 text-sm font-medium'>Photography</p>
                            </div>
                            <div className='my-3 w-full h-44 bg-[#10242F] group-hover:bg-[#A5C8D8] duration-500 rounded-md'>

                            </div>
                        </div>
                    </div>


                    <div
                        className={`relative overflow-hidden w-80 md:w-72 lg:w-96 p-6 text-left rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:-translate-y-5 group bg-[#E39A4D]  cursor-pointer`}
                    >
                        <div className="absolute h-[0rem] w-[0rem] -z-10 rounded-full bg-[#452623] duration-500 -top-20  -left-20  group-hover:h-[550px] group-hover:w-[34rem] transition-all ease-in-out"></div>

                        <h3 className="text-3xl text-[#452623] group-hover:text-[#E39A4D] duration-500 font-semibold mb-2">Website</h3>
                        <p className=" text-[#452623] group-hover:text-[#E39A4D] duration-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem earum eius error placeat consequatur corrupti.</p>

                        <div className='bg-[#452623] group-hover:bg-[#E39A4D] duration-500 p-3 rounded-lg mt-4'>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-1'>
                                    <div className='w-3 h-3 bg-[#E39A4D] group-hover:bg-[#452623] duration-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-[#E39A4D] group-hover:bg-[#452623] duration-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-[#E39A4D] group-hover:bg-[#452623] duration-500 rounded-full'></div>
                                </div>
                                <p className='text-[#E39A4D] group-hover:text-[#452623] duration-500 text-sm font-medium'>Photography</p>
                            </div>
                            <div className='my-3 w-full h-44 bg-[#E39A4D] group-hover:bg-[#452623] duration-500 rounded-md'>

                            </div>
                        </div>
                    </div>


                    <div
                        className={`relative group cursor-pointer min-h-[430px] max-h-[430px] overflow-hidden w-80 md:w-72 lg:w-96 p-6 text-left rounded-xl shadow-lg transform transition-transform duration-300 ease-in-out hover:-translate-y-2 -ml-16  bg-[#CBB0EB] rotate-[4deg] translate-y-4`}>
                        <div className="absolute h-[0rem] w-[0rem] -z-10 rounded-full bg-[#1F1738] duration-500 -top-20  -left-20  group-hover:h-[560px] group-hover:w-[35rem] transition-all ease-in-out"></div>

                        <h3 className="text-3xl text-[#1F1738] group-hover:text-[#CBB0EB] duration-500 font-semibold mb-2">Graphic Design</h3>
                        <p className=" text-[#1F1738] group-hover:text-[#CBB0EB] duration-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem earum eius error placeat consequatur corrupti.</p>
                        <div className='flex items-center justify-center mt-14 w-[500px] gap-3 overflow-hidden '>
                            <div className='w-40 h-40 bg-[#1F1738] group-hover:bg-[#CBB0EB] duration-500 rounded-full flex items-center justify-center'>
                               <h1 className='text-center text-[#CBB0EB] group-hover:text-[#1F1738] text-5xl font-semibold font-serif'>Aa</h1> 
                            </div>
                            <div className='w-40 h-40 bg-[#1F1738] group-hover:bg-[#CBB0EB] duration-500 rounded-full flex items-center justify-center'>
                            <HiColorSwatch className='text-[#CBB0EB] group-hover:text-[#1F1738] text-5xl' />
                            </div>
                            <div className='w-40 h-40 bg-[#1F1738] group-hover:bg-[#CBB0EB] duration-500 rounded-full'></div>
                        </div>
                       
                    </div>

                </div>
                <div className=" absolute bottom-[-100px] left-0 w-full h-[200px] bg-white rounded-t-[50%]"></div>

                <img src="./www-icon.png" alt="browser icon" className='w-28 absolute left-10 bottom-28 rotate-12' />
                <img src="./app-icon.png" alt="phone icon" className='w-28 absolute left-40 top-28 ' />
                <img src="./tablet-icon.png" alt="tablet icon" className='w-28 absolute right-20 bottom-40 ' />
            </div >
        </div >
    )
}

export default Services