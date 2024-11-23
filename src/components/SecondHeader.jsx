import React from 'react'

function SecondHeader() {
    return (
        <div className='max-w-[1280px] mx-auto flex items-center justify-center fixed bottom-10 w-full'>
            <div className='bg-gradient-to-b from-black to-[#292929] text-white rounded-full flex gap-8  justify-center px-1'>
                <ul className='hidden md:flex gap-8 rounded-full  text-white py-5 '>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#project'>Project</a></li>
                    <li><a href='#about'>About us</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
                <h1 className='bg-gray-600 py-5 my-1 px-4 rounded-full'>Let's Talk</h1>

            </div>
        </div>
    )
}

export default SecondHeader