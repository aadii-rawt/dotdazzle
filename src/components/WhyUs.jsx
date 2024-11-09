import React from 'react'

function WhyUs() {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <h1 className='text-4xl font-russo text-center mb-20'>Why Choose Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center mx-auto relative'>
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
                        <img src="/wallet.jpg" alt="affordable prices" className='w-[100px]' />

                    </div>
                    <div>
                        <h1 className='font-russo text-2xl mb-3'>Personal Connection</h1>
                        <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                    </div>
                </div>
                <div className='shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2 md:mx-0 md:w-3/4 place-self-center justify-self-center'>
                    <div>
                        <img src="/wallet.jpg" alt="affordable prices" className='w-[100px]' />

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
                <img src="/why.png" alt="Centered Image" className='w-[450px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className='flex mt-32'>
                <div>
                    <img src="./why.png" alt="Centered Image" className='' />
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
                            <img src="/wallet.jpg" alt="affordable prices" className='w-[100px]' />

                        </div>
                        <div>
                            <h1 className='font-russo text-2xl mb-3'>Personal Connection</h1>
                            <p className='font-josefin'>We provide websites to all startups at very affordable prices.</p>
                        </div>
                    </div>
                    <div className='shadow-lg rounded-2xl p-5 py-10 flex flex-col md:flex-row item-center gap-5 mx-2  place-self-center justify-self-center'>
                        <div>
                            <img src="/wallet.jpg" alt="affordable prices" className='w-[100px]' />

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
            </div>

        </div>
    )
}

export default WhyUs