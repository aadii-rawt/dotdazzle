import React from 'react';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io';
import { MdKeyboardArrowRight, MdOutlineEmail } from 'react-icons/md';

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 via-purple-50  bg-gray-100 text-center px-6">
      <div className="text-6xl mb-4 w-24">
        <img src="./thumb.png" alt="" />
      </div>
      <p className="text-gray-500 uppercase tracking-widest font-josefin">We're still</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold  text-blue-700 mb-4">
       Something Cooking.
      </h1>
      <p className="text-gray-500 text-lg mb-8 font-josefin">
        We are going to launch our website very soon. Stay tuned.
      </p>
      <button className="flex gap-4 items-center outline-none  p-2 pr-8 bg-gradient-to-r from-purple-900  via-purple-800 to-purple-700 text-white text-lg rounded-full shadow-md hover:shadow-lg">
        <span className="w-10 h-10 flex items-center font-medium justify-center bg-white rounded-full p-2 text-purple-800"><MdOutlineEmail /></span>
        <span> Notify Me</span>
        <span><MdKeyboardArrowRight /></span>
      </button>

      <div className="flex space-x-4 mt-8 text-gray-400">
        <span className="text-2xl shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:text-black duration-700"><IoLogoInstagram /></span>
        <span className="text-2xl shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:text-black duration-700"><FaLinkedinIn /></span>
        <span className="text-2xl shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:text-black duration-700"><FaXTwitter size={20} /></span>
      </div>

      {/* Decorative elements */}
      <img src="./glasshour.png" alt="coming soon icon" className="absolute top-8 md:bottom-8 left-8 w-24 -rotate-12" />
      <img src="./celebrate.png" alt="" className="absolute bottom-8 right-8 w-24" />
    </div>
  );
};

export default ComingSoon;
