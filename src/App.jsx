import React, { useState } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Services from './components/Services'
import Section from './components/Section'
import Portfolio from './components/Portfolio'
import WhyUs from './components/WhyUs'

const App = () => {

  return (
    <div className='relative mb-20'>
      {/* <div className='bg-gradient-to-b from-purple-100 via-purple-50'> */}
      <Header />
      <div className='space-y-20'>
        <Hero />

        <Services />
        <WhyUs />
      </div>
      {/* </div> */}
      {/* <div className={`w-8 h-8 rounded-full bg-black z-50 absolute  top-[${point.y}] left-[${point.x}] `}></div> */}
    </div>
  )
}

export default App