import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import OurTeam from './components/OurTeam';
import ServiceEffect from './components/ServiceEffect';
import Projects from './components/Projects';
import SEO from './components/SEO';

const App = () => {

  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.left = `${e.clientX}px`;
      }
    };

    // Show cursor on mouse move and add the event listener
    const handleMouseEnter = () => setIsCursorVisible(true);
    const handleMouseLeave = () => setIsCursorVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      // Cleanup event listeners on unmount
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    
    <div className='relative '>
      <SEO />
      <Header />
      <div className='space-y-10'>
        <Hero />
        <ServiceEffect />
        <WhyUs />
        <Services />
        <Projects />
        <OurTeam />
        <FAQ />
        <Footer />
      </div>
      <div>
        <a href="https://wa.me/+919717336452" target='_blank'>
          <img src="./social.png" alt="whatsapp" className='w-12 md:w-16 fixed bottom-5 right-5' />
        </a>
      </div>

      {/*==================== custom cursor ===========================*/}
      <div
        ref={cursorRef}
        className="w-6 h-6 rounded-full border-2  border-black  absolute pointer-events-none transition-transform duration-75 transform -translate-x-1/2 -translate-y-1/2 z-50"
      ></div>
    </div >
  )
}

export default App