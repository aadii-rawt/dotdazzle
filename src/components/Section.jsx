import React from 'react'

const Section = () => {
  return (
    <div className='relative bg-red-300'>
      <div className='pt-[34%] px-52'>
        <h1 className='text-5xl max-w-[80%]  text-white z-50 relative font-arik'>TOP REASONS WHY CUSTOMERS CHOOSE <span className='uppercase text-yellow-400'>DotDazzle</span></h1>
      </div>

      <div className="mt-28 relative z-50 flex items-center justify-center  h-[400px] bg-black text-white">
        {/* Center Image */}
        <div className="relative  flex items-center justify-center">
          <img
            src='/as.svg'
            alt="Center"
            className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64"
          />
        </div>

        {/* Heading Top */}
        <div className=" absolute top-0 ">
          <h2 className="text-lg md:text-xl text-left lg:text-2xl font-semibold">
            Free Start
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Free first iteration of development
          </p>
        </div>

        {/* Heading Bottom */}
        <div className="absolute bottom-5 md:bottom-8 lg:bottom-0 ">
          <h2 className="text-lg md:text-xl lg:text-2xl  text-left font-semibold">
            Industry Standard
          </h2>
          <p className="text-sm md:text-base text-gray-400">
          We ensure our work meets industry standards.
          </p>
        </div>

        {/* Heading Left */}
        <div className="absolute left-0 md:left-60 lg:left-52 ">
          <h2 className="text-lg md:text-xl lg:text-2xl  text-left font-semibold">
          100% Trust
          </h2>
          <p className="text-sm md:text-base text-gray-400">
          We give 100% trust to our clients <br /> and their startups.
          </p>
        </div>

        {/* Heading Right */}
        <div className="absolute right-5 md:right-10 lg:right-28 ">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
            Personal Connection
          </h2>
          <p className="text-sm md:text-base text-left text-gray-400">
            We Build a Personal Connection with All <br /> Startup Owners
          </p>
        </div>
      </div>
      <img src="top-wave.svg" className='absolute -top-[32rem] w-screen bg-black' />

      <img src="top-reasons.svg" className='bg-black w-screen' alt="" />
    </div>
  )
}

export default Section