import React from 'react'

function Footer() {
    return (
        <div className='max-w-[1280px] mx-auto '>
            <div className='flex flex-col md:flex-row justify-between '>
            <div className='mx-2'>
                <h1 className='font-russo text-5xl'>Let's make <br /> something together</h1>
                <p className='font-josefin my-3 text-xl'>Write us if you have any questions</p>
                {/* <h2 className='text-2xl md:text-4xl font-bold text-yellow-500 mt-5'>.dazzle</h2> */}
                <div>
                    <img src="dazzlelogo.png" className='-ml-1.5' alt="" />
                </div>
            </div>
            <div className='w-full md:w-1/3 mx-2'>
                <form action="" className='space-y-4'>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='font-josefin mx-4'>Full Name</label>
                        <input type="text" className='w-full bg-gray-100 px-6 py-3 rounded-3xl outline-none' placeholder='Type your name...' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='font-josefin mx-4'>E-mail</label>
                        <input type="text" className='w-full bg-gray-100 px-6 py-3 rounded-3xl outline-none' placeholder='Type your name...' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='font-josefin mx-4'>Message</label>
                        <textarea  type="text" className='w-full resize-none bg-gray-100 px-6 py-3 rounded-3xl outline-none' placeholder='Type your name...' />
                    </div>
                    <div className='flex justify-end'>
                        <button className='bg-gradient-to-r from-purple-900 w-1/2 via-purple-800 to-purple-700 font-josefin  text-white md:text-lg p-2 px-5 mt-3 rounded-3xl'>Send an Email</button>
                    </div>
                </form>
            </div>
            </div>

            <div className='border-t-2 border-gray-200 font-josefin flex  flex-col md:flex-row justify-between items-center py-5 mt-20'>
                <p>© 2024 dotdazzle. All rights reserved.</p>
                <div>
                    <ul className='flex gap-3'> 
                        <li>Privacy Policy</li>
                        <li>Terms of use</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer