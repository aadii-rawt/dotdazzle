import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ServiceEffect from '../components/ServiceEffect'
import WhyUs from '../components/WhyUs'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import GetQuoteModal from '../components/QuoteForm'
import Projects from '../components/Projects'
import FAQ from '../components/FAQ'

function Home() {
  const homeMetadata = {
    title: "Dotdazzle - Your Idea, Our Code | Web Development & Design Solutions",
    description: "Dotdazzle is your trusted software agency offering top-notch web development, graphic design, SEO, logo creation, and branding services. Turn your ideas into reality with us!",
    keywords: "DotDazzle, web development, graphic design, SEO services, logo creation, branding, software agency, website building, digital marketing, design solutions",
    robots: "index, follow",
    canonical: "https://dotdazzle.in",
    icons: [
        { href: "/favicon.ico", type: "image/x-icon" },
        { href: "/Favicon/favicon.png", sizes: "32x32", type: "image/png" }
    ]
};
  return (
    <div className='relative '>
      <SEO metadata={homeMetadata}/>
      <div className='space-y-10'>
        <Hero />
        {/* <ServiceEffect /> */}
        <WhyUs />
        <Services />
        <AboutUs />
        <GetQuoteModal />
        <Projects />
        <FAQ />
      </div>
    </div >
  )
}

export default Home