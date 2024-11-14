import { motion } from 'framer-motion'
import React from 'react'

const projects = ["./project4.png", "./project6.jpg", "./project5.png", "./project1.jpg", "https://unblast.com/wp-content/uploads/2019/11/Perspective-Apple-iMac-Mockup-1-1600x1224.jpg", "https://unblast.com/wp-content/uploads/2023/08/Perspective-App-Screen-Mockup-1536x1024.jpg"]
function Projects() {

    return (
        <section className='max-w-[1280px] mx-auto'>
            <h1 className='text-4xl font-russo text-center mb-20 '>Our Projects</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {projects.map((data) => (
                    <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className='rounded-2xl overflow-hidden shadow-md  hover:scale-110'>
                        <img src={data} alt="" />
                    </motion.div>
                ))}

            </div>
        </section>
    )
}

export default Projects