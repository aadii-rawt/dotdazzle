import React, { useState, useRef, useEffect } from "react";

const accordionData = [
  {
      title: "What makes your agency different from other startup development agencies?",
      content:"We stand out by offering comprehensive support. We go beyond just website or app development, providing services like legal guidance, marketing branding, and ongoing growth strategies. We're your one-stop shop for success!"
    },
  {
      title: "What stage of startups do you typically work with?",
      content: "We welcome startups at all stages! From ideation and validation to launch and growth, we tailor our services to your specific needs.",
  },
  {
      title: "What kind of websites and applications do you develop?",
      content: "We have expertise across various platforms and technologies, building everything from e-commerce websites and mobile apps to custom software solutions.",
  },
  {
      title: "How do you help me market and brand my startup effectively?",
      content: "We create tailored marketing strategies based on your target audience and goals. This includes branding development, social media management, content marketing, and paid advertising campaigns.",
  },
  {
      title: "How do you communicate and collaborate with your clients?",
      content: "We believe in open communication and transparency. We assign dedicated project managers and utilize collaboration tools to keep you informed and involved throughout the process.",
  },
  {
      title: "How much does it cost to work with your agency?",
      content: "The cost depends on your specific needs and chosen services. We offer transparent pricing models and provide detailed proposals before work begins.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='max-w-[1280px] mx-auto '>
      <h1 className='text-4xl font-russo text-center mb-20'>FAQs</h1>
      <div className="relative">
        <div className="w-full md:w-3/5 mx-auto my-4 shadow-lg p-8 rounded-2xl">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
          {/* <img src="./faq1.avif" alt="faq icon" className="w-20 hidden md:block absolute top-10 left-20 rotate-6 z-10" /> */}
          <img src="./faq2.avif" alt="faq icon" className="w-20 hidden md:block absolute bottom-20 left-20 -rotate-[30deg] z-10" />
          <img src="./faq4.avif" alt="faq icon" className="w-20 hidden md:block absolute top-20 right-24 z-10" />
          <img src="./faq3.avif" alt="faq icon" className="w-20 hidden md:block absolute bottom-32 right-32 rotate-6 z-10" />
      </div>

    </div>
  )
}

const AccordionItem = ({ title, content, isOpen, onClick,index }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className={index != accordionData?.length -1 && "border-b border-gray-300"}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4  text-xl font-semibold text-left  focus:outline-none"
      >
        <span>{title}</span>
        <span className="text-blue-700">
          {isOpen ? 
          
          <img src="./up-arrow.jpg" alt="down arrow" className="w-8"/>
           :  <img src="./down-arrow.jpg" alt="down arrow" className="w-8"/>}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ height: contentHeight }}
        className="transition-all duration-300 ease-in-out overflow-hidden  text-gray-700"
      >
        <div className="">
          <p className="max-w-[800px] text-lg font-josefin pb-3">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ