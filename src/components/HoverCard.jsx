import React from 'react'

const HoverCard = () => {
  return (
      <div className="relative group overflow-hidden w-[15rem] h-[15rem]">
          {/* Circle */}
          <div className="absolute h-[0rem] w-[0rem] z-50 rounded-full bg-blue-900 -left-16 duration-500 -top-20  group-hover:h-96 group-hover:w-[30rem] transition-all ease-in-out"></div>

          {/* Card Content */}
          <div className="relative z-10 flex items-center justify-center w-full h-full bg-indigo-400">
              <h2 className="text-4xl text-white font-bold">DotDazzle</h2>
          </div>
      </div>

  )
}

export default HoverCard