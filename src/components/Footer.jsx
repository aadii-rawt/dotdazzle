import React, { useState } from 'react'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {

    const [result, setResult] = useState();

    const onSubmit = async (e) => {
        e.preventDefault();
        setResult("Sending....");
        const formData = new FormData(e.target);

        formData.append("access_key", "3201b543-5c29-4336-8cef-6972717e06c3");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            notify()

            e.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    const notify = () => toast("Form Submitted Successfully");


    return (
        <footer className='max-w-[1280px] mx-auto sm:pt-20 pt-5 px-2'>
            <ToastContainer />
            <div className='flex flex-col gap-y-10 md:flex-row justify-between '>
                <div className='mx-2'>
                    <h1 className='font-russo sm:text-start text-start text-3xl md:text-5xl'>Let's make <br /> something together</h1>
                    <h1 className='font-josefin my-3 mt-5 text-xl'>Write us if you have any questions</h1>
                    <div>
                        <div className='flex items-center gap-3'>
                            <p className='flex items-center gap-2'> <span><MdOutlinePhone className='text-purple-600' /></span>+91 9599518124, </p>
                            <p className='flex items-center gap-2'>  <span><MdOutlinePhone className='text-purple-600' /></span>+91 9717336452</p>
                        </div>
                        {/* <p title='mail to dotdazzle' className='flex items-center gap-2'> <MdOutlineEmail className='text-purple-600' /> <a href="mailto:dotdazzle@gmail.com" title='dotdazzle email'>dotdazzle.in@gmail.com</a></p> */}
                    </div>
                    <div>
                        <img src="./dotdazzle-logo.svg" alt="dotdazzle logo" className='-ml-1.5 mb-0 w-40 my-5' />

                    </div>
                    <div className='flex gap-5 text-2xl my-3 text-purple-600'>
                        <a href="https://www.instagram.com/dotdazzle.in/" target='_blank' title='instagram'><FaInstagram /></a>
                        <a  href="https://wa.me/+919599518124" target='_blank' title='whatsapp'><FaWhatsapp /></a>
                        <a href="#" title='linkedin'><FaLinkedinIn /></a>
                    </div>
                </div>
                <div className='w-full md:w-1/3 mx-2'>
                    <form onSubmit={onSubmit} className='space-y-4' title='contact us form'>
                        <div className='flex flex-col'>
                            <label htmlFor="name" className='font-josefin mx-4'>Full Name</label>
                            <input type="text" name='name' className='w-full bg-gray-100 px-6 py-3 rounded-3xl outline-none' placeholder='Type your name...' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="name" className='font-josefin mx-4'>E-mail</label>
                            <input type="text" name='email' className='w-full bg-gray-100 px-6 py-3 rounded-3xl outline-none' placeholder='Type your name...' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="name" className='font-josefin mx-4'>Message</label>
                            <textarea type="text" name='message' className='w-full resize-none bg-gray-100 px-6 py-3 rounded-3xl outline-none' placeholder='Type your name...' required />
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-gradient-to-r from-purple-900 w-1/2 via-purple-800 to-purple-700 font-josefin  text-white md:text-lg p-2 px-5 mt-3 rounded-3xl'>Send an Email</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='border-t-2 border-gray-200 font-josefin flex  flex-col md:flex-row justify-between items-center py-5 mt-20'>
                <p>© 2025 dotdazzle. All rights reserved.</p>
                <div >
                    <ul className='flex gap-3'>
                        <a href='https://dotdazzle.in'  title='privacy and policy'>Privacy Policy</a >
                        <a href='https://dotdazzle.in' title='terms and cocnditon'>Terms of use</a >
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer