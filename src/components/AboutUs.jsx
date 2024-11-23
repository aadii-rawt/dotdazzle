import React from 'react'

function AboutUs() {
    return (
        <section id="about" className='max-w-[1280px] mx-auto  relative z-5'>
            <h1 className='text-4xl font-russo text-center mb-20'>About Dotdazzle</h1>
            <div id='contact' className='flex flex-col gap-y-10 md:flex-row justify-between items-center gap-10 px-3 md:px-0'>
                <div className='md:w-[50%]'>
                    <img src="./AboutUs.png" alt="" className='' />
                </div>
                <div className='md:w-[50%]'>
                    <div>
                        <h1 className='font-bold text-5xl md:text-6xl font-josefin'>Start Crafting Your  <br className='hidden md:inline-block' /> Next Great Idea</h1>
                        <h1 className='font-josefin text-lg my-3'>We are 100% committed to taking your startup from zero <br className='hidden md:inline-block' /> to step hundred.</h1>
                    </div>
                    <div className="grid justify-items-center md:justify-items-start grid-cols-1 gap-y-4 md:grid-cols-2 mt-5">
                        <div>
                            <div className='flex items-center justify-center md:justify-start'>
                                <img src="./experience-icon.png" alt="experience icon" className='w-20' />
                                <h1 className='font-russo text-3xl'>1.5+</h1>
                            </div>
                            <p className='font-josefin text-center md:text-left'>Experience More <br />
                                Than 1.5 years.</p>
                        </div>
                        <div>
                            <div className='flex items-center justify-center md:justify-start'>
                                <img src="./fast-icon.png" alt="experience icon" className='w-20 rotate-[30deg]' />
                                <h1 className='font-russo text-3xl'>2.5x</h1>
                            </div>
                            <p className='font-josefin text-center md:text-left'>We claim that we are 2.5 times <br /> faster, more effective and perform <br /> better than others.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs