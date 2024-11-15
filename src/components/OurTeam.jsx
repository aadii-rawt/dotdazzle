import React from 'react'

function OurTeam() {
    return (
        <div className='max-w-[1280px] mx-auto '>
            <h1 className='text-4xl font-russo text-center mb-20'>Our Team</h1>
            <div className='flex items-center justify-evenly'>
                <div className='w-96 h-96 rounded-2xl space-y-3 p-5'>
                    <div className='w-full flex items-center justify-center rounded-2xl overflow-hidden'>
                        <img src="./sher.jpg" alt="out team founder" className='rounded-2xl'/>
                    </div>
                    <div className='text-center space-y-2'>
                        <h1 className='font-russo text-xl'>Sher</h1>
                        <h2 className='font-josefin'>Founder & CEO </h2>
                    </div>
                </div>
                <div className='w-96 h-96 rounded-2xl space-y-3 p-5'>
                    <div className='w-full flex items-center justify-center rounded-2xl overflow-hidden'>
                        <img src="./cheetah.jpg" alt="out team founder" className='rounded-2xl'/>
                    </div>
                    <div className='text-center space-y-2'>
                        <h1 className='font-russo text-xl'>Cheetah</h1>
                        <h2 className='font-josefin'>Co-Founder</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam