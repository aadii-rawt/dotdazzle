import React from 'react'
import { motion } from 'framer-motion'
import { GiNinjaStar, GiStarShuriken } from 'react-icons/gi'
import { FaArrowsUpDownLeftRight } from 'react-icons/fa6'
import { GoArrowUpRight } from 'react-icons/go'


const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-purple-100 via-purple-50  pt-24 ">
      <div className=' relative max-w-[1280px] mx-auto w-full h-full  md:min-h-screen  flex flex-col space-y-10 md:flex-row items-center justify-between'>
        <div className='relative bg-transparent  md:-mt-40 md:w-1/2'>
          <div className=''>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }} className='text-5xl md:text-8xl text-center md:text-left font-russo'>Your Idea <br /> Our Code <br /></motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }} className='text-center md:text-left md:text-2xl my-4 font-josefin'>Let's Start & Grow Your Startup <br /> To The Next Level.</motion.p>
            <div className='flex items-center justify-center md:block'>
              <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}  className='inline-block'>

              <a target='_blank' href="https://wa.me/+919717336452" className='bg-gradient-to-r from-purple-900  via-purple-800 to-purple-700  font-russo  text-white md:text-2xl p-2 px-5 flex items-center gap-4 mt-5  md:mt-8 rounded-3xl'>
              <span>Let's talk</span> <GoArrowUpRight strokeWidth={1} className='text-2xl' />
              </a>
              </motion.div>
            </div>
            {/*--------------------------review---------------------- */}
            <motion.div initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }} className='flex items-center justify-center md:justify-start gap-3 md:gap-5 mt-8 md:mt-10'>
              <div className='flex'>
                <div className='w-12 h-12 md:w-16 md:h-16  border-4 border-white bg-center bg-cover rounded-full' style={{ backgroundImage: `url(./review-img1.avif)` }}></div>
                <div className='w-12 h-12 md:w-16 md:h-16 bg-blue-500 border-4 border-white rounded-full bg-center bg-cover -ml-6' style={{ backgroundImage: `url(./review-img2.avif)` }}></div>
                <div className='w-12 h-12 md:w-16 md:h-16 bg-blue-500 border-4 bg-center bg-cover border-white rounded-full -ml-6' style={{ backgroundImage: `url(./review-img3.avif)` }}></div>
              </div>
              <h1 className='text-xl md:text-2xl font-russo'>25+ reviews</h1>
            </motion.div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center md:w-[40%]'>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }} className='flex items-start justify-between'>
            <img src="./hero-img1.jpg" alt="" className='w-[150px] md:w-[250px] rounded-3xl -rotate-12 shadow-2xl ' style={{ boxShadow: "-30px 20px 0px rgba(0,0,0,0.2" }} />
            <div className='sm:mr-5 -mr-12'>
              {/* <GiStarShuriken size={80} className='text-purple-800 move' /> */}
              <img src="./hero-icon2.png" alt="hero icon" className='w-28 move' />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }} className='flex items-center justify-between mr-10 '>
            <div>
              {/* <GiNinjaStar size={80} className='text-purple-800 move' /> */}
              <img src="./hero-icon1.png" alt="hero icon" className='w-32 move' />

            </div>
            <img src="./hero-img2.jpg" alt="" className=' w-[150px] md:w-[250px] rounded-3xl rotate-12' />
          </motion.div>

        </div>
      </div>
    </section >
  )
}

export default Hero


// "Clash Display", "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"