import { motion } from 'framer-motion'
import React from 'react'

const projects = ["./responsive-website-project1.png", "./responsive-website-project2.jpg", "./responsive-website-project3.jpg", "https://s3.envato.com/files/326861897/PREVIEW_SET_ZIP/PSD-1.jpg", "./responsive-website-project5.jpg", "./responsive-website-project6.png",]
function Projects() {

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id='project' title='project-section' className='max-w-[1280px] mx-auto section'>
            <h1 className='text-4xl font-russo text-center mb-20'>Our Projects</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-3 md:px-0'>
                {projects.map((data, index) => (
                    <motion.div key={data}
                        initial="hidden"
                        whileInView="visible"
                        variants={cardVariants}
                        transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeInOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='rounded-2xl overflow-hidden shadow-md  hover:scale-110'>
                        <img src={data} alt="" />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects