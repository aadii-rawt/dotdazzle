import React from 'react'
import {motion} from 'framer-motion'

function WhyUs() {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <h1 className='text-4xl font-russo text-center mb-20'>Why Choose Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center mx-auto relative'>
                <div className='bg-white shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2 md:w-3/4 place-self-center justify-self-center'>
                    <div className='flex items-center justify-center'>
                        <img src="/wallet.jpg" alt="affordable prices" className='w-[100px]' />
                    </div>
                    <div>
                        <h1 className='font-russo text-2xl mb-3'>Affordable Price</h1>
                        <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                    </div>
                </div>
                <div className='bg-white shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center justify-center gap-5 mx-2 md:mx-0 md:w-3/4 place-self-center justify-self-center'>
                      <div className='flex items-center justify-center'>
                        <img src="/phone.avif" alt="affordable prices" className='w-[100px]' />
                    </div>
                    <div>
                        <h1 className='font-russo text-2xl mb-3'>Personal Connection</h1>
                        <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                    </div>
                </div>
                <div className='bg-white shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2 md:mx-0 md:w-3/4 place-self-center justify-self-center'>
                      <div className='flex items-center justify-center'>
                        <img src="/industry.jpg" alt="affordable prices" className='w-[100px]' />
                    </div>
                    <div>
                        <h1 className='font-russo text-2xl mb-3'>Industry Standard</h1>
                        <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                    </div>
                </div>
                <div className='bg-white shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2 md:mx-0 md:w-3/4 place-self-center justify-self-center'>
                      <div className='flex items-center justify-center'>
                        <img src="/trust.avif" alt="affordable prices" className='w-[120px]' />
                    </div>
                    <div>
                        <h1 className='font-russo text-2xl mb-3'>100% Trust</h1>
                        <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                    </div>
                </div>
                <img src="/t2.png" alt="Centered Image" className='w-[450px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </div>

             <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }} className='flex flex-col md:flex-row pt-32'>
                <div className='flex items-center justify-center'>
                    <img src="./t2.png" alt="Centered Image" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='bg-white shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2  place-self-center justify-self-center'>
                          <div className='flex items-center justify-center'>
                            <img src="/wallet.jpg" alt="affordable prices" className='w-[100px]' />
                        </div>
                        <div>
                            <h1 className='font-russo text-2xl mb-3'>Affordable Price</h1>
                            <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                        </div>
                    </div>
                    <div className='bg-white shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center justify-center gap-5 mx-2  place-self-center justify-self-center'>
                          <div className='flex items-center justify-center'>
                            <img src="/phone.avif" alt="affordable prices" className='w-[100px]' />

                        </div>
                        <div>
                            <h1 className='font-russo text-2xl mb-3'>Personal Connection</h1>
                            <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                        </div>
                    </div>
                    <div className='bg-white shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2  place-self-center justify-self-center'>
                          <div className='flex items-center justify-center'>
                            <img src="/industry.jpg" alt="affordable prices" className='w-[100px]' />

                        </div>
                        <div>
                            <h1 className='font-russo text-2xl mb-3'>Industry Standard</h1>
                            <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                        </div>
                    </div>
                    <div className='bg-white shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2  place-self-center justify-self-center'>
                          <div className='flex items-center justify-center'>
                            <img src="/trust.avif" alt="affordable prices" className='w-[120px]' />

                        </div>
                        <div>
                            <h1 className='font-russo text-2xl mb-3'>100% Trust</h1>
                            <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }} className='flex flex-col md:flex-row pt-5'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='bg-white shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2  place-self-center justify-self-center'>
                          <div className='flex items-center justify-center'>
                            <img src="/wallet.jpg" alt="affordable prices" className='w-[100px]' />
                        </div>
                        <div>
                            <h1 className='font-russo text-2xl mb-3'>Affordable Price</h1>
                            <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                        </div>
                    </div>
                    <div className='bg-white shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center justify-center gap-5 mx-2  place-self-center justify-self-center'>
                          <div className='flex items-center justify-center'>
                            <img src="/phone.avif" alt="affordable prices" className='w-[100px]' />
                        </div>
                        <div>
                            <h1 className='font-russo text-2xl mb-3'>Personal Connection</h1>
                            <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                        </div>
                    </div>
                    <div className='bg-white shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2  place-self-center justify-self-center'>
                          <div className='flex items-center justify-center'>
                            <img src="/industry.jpg" alt="affordable prices" className='w-[100px]' />
                        </div>
                        <div>
                            <h1 className='font-russo text-2xl mb-3'>Industry Standard</h1>
                            <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                        </div>
                    </div>
                    <div className='bg-white shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2  place-self-center justify-self-center'>
                          <div className='flex items-center justify-center'>
                            <img src="/trust.avif" alt="affordable prices" className='w-[120px]' />
                        </div>
                        <div>
                            <h1 className='font-russo text-2xl mb-3'>100% Trust</h1>
                            <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img src="./t.png" alt="Centered Image" />
                </div>
            </motion.div>


            {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center mx-auto relative'>
                <div className='shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2 md:w-3/4 place-self-center justify-self-center'>
                    <div>
                        <img src="/wallet.jpg" alt="affordable prices" className='w-[100px]' />
                    </div>
                    <div>
                        <h1 className='font-russo text-2xl mb-3'>Affordable Price</h1>
                        <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                    </div>
                </div>
                <div className='shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center justify-center gap-5 mx-2 md:mx-0 md:w-3/4 place-self-center justify-self-center'>
                    <div>
                        <img src="/phone.avif" alt="affordable prices" className='w-[100px]' />

                    </div>
                    <div>
                        <h1 className='font-russo text-2xl mb-3'>Personal Connection</h1>
                        <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                    </div>
                </div>
                <div className='shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2 md:mx-0 md:w-3/4 place-self-center justify-self-center'>
                    <div>
                        <img src="/industry.jpg" alt="affordable prices" className='w-[100px]' />

                    </div>
                    <div>
                        <h1 className='font-russo text-2xl mb-3'>Industry Standard</h1>
                        <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                    </div>
                </div>
                <div className='shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2 md:mx-0 md:w-3/4 place-self-center justify-self-center'>
                    <div>
                        <img src="/trust.avif" alt="affordable prices" className='w-[120px]' />

                    </div>
                    <div>
                        <h1 className='font-russo text-2xl mb-3'>100% Trust</h1>
                        <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                    </div>
                </div>
                <img src="/t3.png" alt="Centered Image" className='w-[450px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </div> */}

            {/* <div className='flex flex-col md:flex-row pt-32 pb-32'>
                <div className='flex items-center justify-center'>
                    <img src="./t3.png" alt="Centered Image" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2  place-self-center justify-self-center'>
                        <div>
                            <img src="/wallet.jpg" alt="affordable prices" className='w-[100px]' />
                        </div>
                        <div>
                            <h1 className='font-russo text-2xl mb-3'>Affordable Price</h1>
                            <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                        </div>
                    </div>
                    <div className='shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center justify-center gap-5 mx-2  place-self-center justify-self-center'>
                        <div>
                            <img src="/phone.avif" alt="affordable prices" className='w-[100px]' />

                        </div>
                        <div>
                            <h1 className='font-russo text-2xl mb-3'>Personal Connection</h1>
                            <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                        </div>
                    </div>
                    <div className='shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2  place-self-center justify-self-center'>
                        <div>
                            <img src="/industry.jpg" alt="affordable prices" className='w-[100px]' />

                        </div>
                        <div>
                            <h1 className='font-russo text-2xl mb-3'>Industry Standard</h1>
                            <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                        </div>
                    </div>
                    <div className='shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2  place-self-center justify-self-center'>
                        <div>
                            <img src="/trust.avif" alt="affordable prices" className='w-[120px]' />

                        </div>
                        <div>
                            <h1 className='font-russo text-2xl mb-3'>100% Trust</h1>
                            <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default WhyUs