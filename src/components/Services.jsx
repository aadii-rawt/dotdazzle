import React from 'react'
import { motion } from 'framer-motion'

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

const Services = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <h1 className='text-4xl font-russo text-center mb-20'>Our Services</h1>
            <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }} className='bg-purple-300 h-[400px] rounded-3xl mx-2 md:p-0 relative'>
                <div className='w-12 h-12 bg-white text-black flex items-center justify-center absolute right-5 bottom-5 rounded-full font-russo text-xl'>1</div>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-5 gap-5 px-2 md:p-0'>
              
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='bg-purple-300 h-[300px] rounded-3xl relative'>
                    <div className='w-12 h-12 bg-white text-black flex items-center justify-center absolute left-5 top-5 rounded-full font-russo text-xl'>2</div>

                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='bg-purple-300 h-[300px] rounded-3xl relative'>
                    <div className='w-12 h-12 bg-white text-black flex items-center justify-center absolute left-5 top-5 rounded-full font-russo text-xl'>3</div>

                </motion.div>
                < motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='bg-purple-300 h-[300px] rounded-3xl relative'>
                    <div className='w-12 h-12 bg-white text-black flex items-center justify-center absolute left-5 top-5 rounded-full font-russo text-xl'>4</div>

                </motion.div>
            </div>
        </div>
    )
}

export default Services