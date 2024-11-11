import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

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

    const [shrink, setShrink] = useState(false);
    const firstSlideRef = useRef(null);
    const lastSlideRef = useRef(null);
    const controls = useAnimation();

    // Set up IntersectionObserver for the first slide
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShrink(false); // Expand slides when the first slide is in view
                }
            },
            { threshold: 0.5 } // Trigger when half of the first slide is visible
        );

        if (firstSlideRef.current) {
            observer.observe(firstSlideRef.current);
        }

        return () => {
            if (firstSlideRef.current) observer.unobserve(firstSlideRef.current);
        };
    }, []);

    // Set up IntersectionObserver for the last slide
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    setShrink(true); // Shrink slides when the last slide is scrolled past
                }
            },
            { threshold: 0.5 } // Trigger when half of the last slide is no longer visible
        );

        if (lastSlideRef.current) {
            observer.observe(lastSlideRef.current);
        }

        return () => {
            if (lastSlideRef.current) observer.unobserve(lastSlideRef.current);
        };
    }, []);

    // Apply shrinking effect based on the `shrink` state
    useEffect(() => {
        if (shrink) {
            controls.start({ scale: 0.8, opacity: 0.6, transition: { duration: 0.5 } });
        } else {
            controls.start({ scale: 1, opacity: 1, transition: { duration: 0.5 } });
        }
    }, [shrink, controls]);

    return (
        <div className='max-w-[1280px] mx-auto'>

            <h1 className='text-4xl font-russo text-center mb-20 sticky top-24'>Our Services</h1>

            {/* ----------------Slides without animation------------------ */}

            <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }} className='card-container px-4'>
                <div className="card">
                    <h2 className='text-6xl z-40 absolute -0 font-bold font-josefin text-white'>#WebDevelopment</h2>
                    <h2 className='text-3xl z-40 absolute -bottom-3 font-bold font-russo italic text-white'>#001</h2>
                    <img src="https://media.istockphoto.com/id/1654916078/photo/abstract-rough-colorful-multicolored-art-on-canvas.jpg?s=612x612&w=0&k=20&c=FkDhu7HQlX4q84mJHCxpagHHSi58CFpQWUl2tfrteV0=" alt="" />
                </div>
                <div className="card">
                    <h2 className='text-6xl z-40 absolute -0 font-bold font-josefin text-white'>#SiteRedesign</h2>
                    <h2 className='text-3xl z-40 absolute -bottom-3 font-bold font-russo italic text-white'>#002</h2>
                    <img src="https://wallpapers.com/images/featured/art-dajgwkpkb3im2q3u.jpg" className='mt-3' alt="" />
                </div>
                <div className="card">
                    <h2 className='text-6xl z-40 absolute -0 font-bold font-josefin text-white'>#WebDesign</h2>
                    <h2 className='text-3xl z-40 absolute -bottom-3 font-bold font-russo italic text-white'>#003</h2>
                    <img src="https://trembelingart.com/wp-content/uploads/2018/07/Warm-and-Cool-F-1.jpg" className='mt-6' alt="" />
                </div>
                <div className="card">
                    <h2 className='text-6xl z-40 absolute -0 font-bold font-josefin text-white'>#LogoDesign</h2>
                    <h2 className='text-3xl z-40 absolute -bottom-3 font-bold font-russo italic text-white'>#004</h2>
                    <img src="https://render.fineartamerica.com/images/rendered/medium/print/8/5.5/break/images/artworkimages/medium/3/tree-of-life-in-colorful-trippy-vibrant-abstract-style-large-stellart-studio.jpg" className='mt-9' alt="" />
                </div>
                <div className="card">
                    <h2 className='text-6xl z-40 absolute -0 font-bold font-josefin text-white'>#SEO</h2>
                    <h2 className='text-3xl z-40 absolute -bottom-3 font-bold font-russo italic text-white'>#005</h2>
                    <img src="https://i.ytimg.com/vi/yO_yErWrTNU/maxresdefault.jpg" className='mt-3' alt="" />
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }} className=' mt-20 bg-purple-300 h-[400px] rounded-3xl mx-2 md:p-0 relative'>
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

            {/* ----------------Slides with animation------------------ */}
            {/* <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }} className='card-container px-4'>
                <motion.div
                    className="card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <img src="https://media.istockphoto.com/id/1654916078/photo/abstract-rough-colorful-multicolored-art-on-canvas.jpg?s=612x612&w=0&k=20&c=FkDhu7HQlX4q84mJHCxpagHHSi58CFpQWUl2tfrteV0=" alt="" />
                </motion.div>
                <motion.div
                    className="card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }} >
                    <img src="https://wallpapers.com/images/featured/art-dajgwkpkb3im2q3u.jpg" alt="" />
                </motion.div>
                <motion.div className="card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <img src="https://trembelingart.com/wp-content/uploads/2018/07/Warm-and-Cool-F-1.jpg" alt="" />
                </motion.div>
                <motion.div className="card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <img src="https://render.fineartamerica.com/images/rendered/medium/print/8/5.5/break/images/artworkimages/medium/3/tree-of-life-in-colorful-trippy-vibrant-abstract-style-large-stellart-studio.jpg" alt="" />
                </motion.div>
                <motion.div className="card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <img src="https://i.ytimg.com/vi/yO_yErWrTNU/maxresdefault.jpg" alt="" />
                </motion.div>
            </motion.div> */}

            {/* <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="card-container px-4"
            >
                <motion.div
                    ref={firstSlideRef} // Attach ref to the first slide
                    className="card bg-indigo-300"
                    animate={controls} // Attach the animation control
                >
                    <h2 className="text-6xl z-40 absolute -0 font-bold font-josefin text-white">#FirstSlide</h2>
                    <h2 className="text-3xl z-40 absolute -bottom-3 font-bold font-russo italic text-white">#001</h2>
                    <img src="https://example.com/image.jpg" alt="" />
                </motion.div>

                {[...Array(3)].map((_, index) => (
                    <motion.div
                        key={index}
                        className="card bg-indigo-300"
                        animate={controls}
                    >
                        <h2 className="text-6xl z-40 absolute -0 font-bold font-josefin text-white">#Slide {index + 2}</h2>
                        <h2 className="text-3xl z-40 absolute -bottom-3 font-bold font-russo italic text-white">#00{index + 2}</h2>
                        <img src="https://example.com/image.jpg" alt="" />
                    </motion.div>
                ))}

                <motion.div
                    ref={lastSlideRef} // Attach ref to the last slide
                    className="card bg-indigo-300"
                    animate={controls}
                >
                    <h2 className="text-6xl z-40 absolute -0 font-bold font-josefin text-white">#LastSlide</h2>
                    <h2 className="text-3xl z-40 absolute -bottom-3 font-bold font-russo italic text-white">#005</h2>
                    <img src="https://example.com/image.jpg" alt="" />
                </motion.div>
            </motion.div> */}

        </div >
    )
}

export default Services