import React from 'react'
import { motion } from 'framer-motion'
import { img } from 'framer-motion/client'

const data = [
    {
        title: "Affordable Price",
        img: "./wallet.jpg",
        content: "We provide websites to all startups at very affordable prices."
    },
    {
        title: "Personal Connection",
        img: "./phone.avif",
        content: "We Build a Personal Connection with All Startup Owners."
    },
    {
        title: "Industry Standard",
        img: "./industry.jpg",
        content: "We ensure our work meets industry standards."
    },
    {
        title: "100% Trust",
        img: "./trust.avif",
        content: "We give 100% trust to our clients and their startups.a"
    },
   
]
function WhyUs() {
    return (
        <section id="benefits" className='max-w-[1280px] mx-auto section'>
            <h1 className='sm:text-4xl text-3xl font-russo text-center sm:mb-20 mb-8'>Why Choose Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center mx-auto relative'>
                {data.map((t) => (
                    <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }} key={t?.title} className='bg-white shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2 md:mx-0 md:w-3/4 place-self-center justify-self-center'>
                        <div className='flex items-center justify-center'>
                            <img src={t?.img} alt="affordable prices" className='w-[120px]' />
                        </div>
                        <div>
                            <h1 className='font-russo text-2xl mb-3'>{t?.title}</h1>
                            <p className='font-josefin'>{t?.content}</p>
                        </div>
                    </motion.div>
                ))
                }
                <img src="/t2.png" alt="Centered Image" className='w-[450px] hidden md:inline-block md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2' />
            </div>
        </section>
    )
}

export default WhyUs