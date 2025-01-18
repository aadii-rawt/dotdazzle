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
  return (
    <div className='relative '>
      <SEO />
      <div className='space-y-10'>
        <Hero />
        <ServiceEffect />
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