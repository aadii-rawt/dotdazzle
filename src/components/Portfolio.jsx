import React from 'react'

const projects = [
    { title: 'Setter', img: '', stack: ["Designing", "Front-end", "Back-end"] },
    { title: 'Setter', img: '', stack: ["Designing", "Front-end", "Back-end"] },
    { title: 'Setter', img: '', stack: ["Designing", "Front-end", "Back-end"] },
    { title: 'Setter', img: '', stack: ["Designing", "Front-end", "Back-end"] }
]

const Portfolio = () => {
    return (
        <div className='px-24 py-12'>
            <div className='flex justify-between mb-8'>
                <h1 className='uppercase text-4xl font-bold'>Our portfolio speaks for itself!</h1>
                <p className='capitalize text-xl'>All Projects</p>
            </div>

            <div className='flex gap-3 w-full flex-wrap '>
                {
                    projects.map((item) => (
                        <div className='flex flex-col justify-between gap-4 min-w-[18rem] min-h-[18rem] text-white rounded-lg bg-[#394D61] p-4'>
                            <h3 className='text-4xl font-semibold'>{item.title}</h3>

                            <div className='mb-5'>
                                <h4 className='text-xl font-bold mb-3'>{item.title}</h4>
                                <div className='flex gap-4'>
                                    {
                                        item.stack.map((stk, i) => (
                                            <span className='px-3 border rounded-full py-1 text-sm'>{stk}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio