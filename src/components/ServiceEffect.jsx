import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

function ServiceEffect() {
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
    <motion.div initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }} className='card-container px-4'>
    <div className="card">
        <h2 className='text-6xl z-40 absolute -0 font-bold font-josefin text-white'>#WebDevelopment</h2>
        <h2 className='text-3xl z-40 absolute -bottom-3 font-bold font-russo italic text-white'>#001</h2>
        {/* <img src="https://media.istockphoto.com/id/1654916078/photo/abstract-rough-colorful-multicolored-art-on-canvas.jpg?s=612x612&w=0&k=20&c=FkDhu7HQlX4q84mJHCxpagHHSi58CFpQWUl2tfrteV0=" alt="" /> */}
        <img src="./project1.avif" alt="" />
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

  )
}

export default ServiceEffect