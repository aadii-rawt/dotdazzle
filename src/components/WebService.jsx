import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa6'
function WebService() {
    return (
        <div className='max-w-[1280px] mx-auto '>
            <h1 className='text-4xl font-russo text-center mb-20'>Web Services</h1>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className=" flex flex-col items-center pb-10 px-4 md:px-8 lg:px-16">
                <div className="flex items-center flex-col md:flex-row gap-6 md:gap-6 lg:gap-12">
                    {/* Basic Plan */}
                    <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="bg-white h-fit p-6 shadow-md rounded-2xl w-full md:w-[30%]">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">Basic</h3>
                        <p className="text-4xl font-bold text-gray-800">$29</p>
                        <p className="text-gray-600 mt-2">Get 40 headshots with 4 unique backgrounds and outfits.</p>
                        <ul className="text-gray-700 mt-4 space-y-2">
                            <li className='flex items-center gap-4'><FaCheck className='text-purple-700' /> 3/4 Pages</li>
                            <li className='flex items-center gap-4'><FaCheck className='text-purple-700' /> Slider</li>
                            <li className='flex items-center gap-4'><FaCheck className='text-purple-700' /> 4 unique styles</li>
                        </ul>
                        <button className="mt-6 w-full py-2 text-white bg-gradient-to-r from-purple-900  via-purple-800 to-purple-700 rounded-md">
                            Get 40 headshots in 3 hours
                        </button>
                    </motion.div>

                    {/* Professional Plan */}
                    <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }} className="bg-white p-6 shadow-md rounded-2xl w-full md:w-[30%] border-2 border-purple-700 relative">
                        <span className="absolute -top-4 left-[100px] bg-purple-700 text-white text-sm font-semibold px-3 py-1 rounded-full">
                            PERFECT CHOICE FOR YOU
                        </span>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">Standard</h3>
                        <p className="text-4xl font-bold text-gray-800">$39</p>
                        <p className="text-gray-600 mt-2">Get 100 headshots with 10 unique backgrounds and outfits.</p>
                        <ul className="text-gray-700 mt-4 space-y-2">
                            <li className='flex items-center gap-4'><FaCheck className='text-purple-700' /> 10/15 Pages</li>
                            <li className='flex items-center gap-4'><FaCheck className='text-purple-700' /> Slider</li>
                            <li className='flex items-center gap-4'><FaCheck className='text-purple-700' /> SEO</li>
                            <li className='flex items-center gap-4'><FaCheck className='text-purple-700' /> 10 unique clothing styles</li>
                        </ul>
                        <button className="mt-6 w-full py-2 text-white bg-gradient-to-r from-purple-900  via-purple-800 to-purple-700 rounded-md">
                            Get 100 headshots in 2 hours!
                        </button>
                    </motion.div>

                    {/* Executive Plan */}
                    <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="bg-white h-fit p-6 shadow-md rounded-2xl w-full md:w-[30%]">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">Custom</h3>
                        <p className="text-4xl font-bold text-gray-800">$59</p>
                        <p className="text-gray-600 mt-2">Get 200 headshots with 20 unique backgrounds and outfits.</p>
                        <ul className="text-gray-700 mt-4 space-y-2">
                            <li className='flex items-center gap-4'><FaCheck className='text-purple-700' /> 1 hour turnaround time</li>
                            <li className='flex items-center gap-4'><FaCheck className='text-purple-700' /> 200 headshots</li>
                            <li className='flex items-center gap-4'><FaCheck className='text-purple-700' /> 20 unique styles</li>
                        </ul>
                        <button className="mt-6 w-full py-2 text-white bg-gradient-to-r from-purple-900  via-purple-800 to-purple-700 rounded-md">
                            Get 200 headshots in 1 hour
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default WebService