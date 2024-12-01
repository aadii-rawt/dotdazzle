import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { motion } from 'framer-motion'

const GetQuoteModal = () => {
    const [isOpen, setIsOpen] = useState(false); // Modal open state
    const [result, setResult] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
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
            // notify()

            e.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
        setIsOpen(false);
    }

    const notify = () => toast("Thanks For Reaching Out!");

    return (
        <div className="!pt-12">
            {/* <ToastContainer/> */}
            {/* Button to open the modal */}

            <div className="text-center">
                <button
                    onClick={() => setIsOpen(true)}
                    className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group border border-gray-400">
                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                    <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Get a Quote</span>
                </button>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50">
                    <div className="bg-gradient-to-br from-purple-50/20 to-purple-200/40 sm:min-w-[28rem] min-w-[85%] rounded-md shadow-purple-400 shadow-[5px_5px_0px_0px_rgba(147,_51,_234,_0.5)]">


                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="bg-white/40 rounded-lg shadow-lg w-full p-6 relative backdrop-blur-[21px] backdrop-saturate-[200%] border border-gray-300/30">

                            {/* <div> */}
                            <img src="comma.png" alt=".comma" className="w-12 absolute sm:-top-6 -top-4 -left-4 sm:-left-5 z-20" />
                            <img src="comma.png" alt=".comma" className="w-12 absolute sm:-bottom-6 -bottom-4 sm:-right-5 -right-4 z-20 rotate-180" />
                            {/* </div> */}
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>


                            {/* Title */}
                            <h2 className="sm:text-3xl text-2xl font-arik font- text-gray-800 mb-4">
                                Get a Quote
                            </h2>

                            <img src="/infoicon.png" alt=".info" className="w-16 absolute top-3 rotate-12 sm:left-56 left-44" />

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name Field */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 w-full px-4 py-2 border-b border-b-black focus:ring-0 focus:outline-none bg-transparent placeholder:text-gray-700"
                                        placeholder="Your Name"
                                        name="name"
                                        required
                                    />
                                </div>

                                {/* Contact Field */}
                                <div>
                                    <label
                                        htmlFor="contact"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Contact
                                    </label>
                                    <input
                                        type="text"
                                        id="contact"
                                        className="mt-1 w-full px-4 py-2 border-b border-b-black focus:ring-0 focus:outline-none bg-transparent placeholder:text-gray-700"
                                        placeholder="Your Email or Phone"
                                        name="contact"
                                        required
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="mt-1 h-16 w-full px-4 py-2 border border-black rounded focus:ring-0 focus:outline-none bg-transparent placeholder:text-gray-700"
                                        placeholder="Your Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group border border-gray-400">
                                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                                        <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Submit</span>
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetQuoteModal;