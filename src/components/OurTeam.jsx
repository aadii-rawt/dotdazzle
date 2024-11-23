import React from 'react';

function OurTeam() {
    return (
        <div className='max-w-[1280px] mx-auto section'>
            <h1 className='text-4xl font-russo text-center mb-20'>Meet the Artists</h1>
            <div className='flex flex-wrap items-center md:gap-0 gap-4 justify-evenly'>
                {
                    [
                        { img: './sher.jpg', title: 'Sher', desg: 'CEO & Founder' },
                        { img: './cheetah.jpg', title: 'Cheetah', desg: 'Co-Founder' },
                        { img: './jaadu.png', title: 'Jaadu', desg: 'Project Manager' },
                        { img: './senior-developer-profile.png', title: 'Panchi', desg: 'Senior Developer' },
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            className={`rounded-2xl space-y-3 p-4 shadow-lg transform transition-transform 
                                ${index % 2 === 0 ? 'sm:translate-y-5' : 'sm:-translate-y-5'}`}
                        >
                            <div className='w-full flex items-center justify-center rounded-2xl overflow-hidden'>
                                <img src={item.img} alt="Our team founder" className='rounded-2xl w-[225px] h-[225px]' />
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
    );
}

export default OurTeam;
