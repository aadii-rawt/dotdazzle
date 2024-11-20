import React from 'react'

function OurTeam() {
    return (
        <div className='max-w-[1280px] mx-auto section'>
            <h1 className='text-4xl font-russo text-center mb-20'>Meet the artists</h1>
            <div className='flex flex-wrap items-center justify-evenly'>
                {
                    [{ img: './sher.jpg', title: 'Sher', desg: 'Founder' },
                    { img: './cheetah.jpg', title: 'Cheetah', desg: 'Co-Founder' },
                    { img: './jaadu.png', title: 'Jaadu', desg: 'Project Manager' },
                    { img: 'https://w0.peakpx.com/wallpaper/569/648/HD-wallpaper-ghim-ca-%C2%A7a-ervanhovanes-hovanes-traan-oggy-oggy-and-jack.jpg', title: 'Jack', desg: 'Founder' },]
                        .map((item) => (
                            <div className='rounded-2xl space-y-3 p-4'>
                                <div className='w-full flex items-center justify-center rounded-2xl overflow-hidden'>
                                    <img src={item.img} alt="out team founder" className='rounded-2xl w-[225px] h-[225px]' />
                                </div>
                                <div className='text-center space-y-2'>
                                    <h1 className='font-russo text-xl'>{item.title}</h1>
                                    <h2 className='font-josefin'>{item.desg}</h2>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default OurTeam