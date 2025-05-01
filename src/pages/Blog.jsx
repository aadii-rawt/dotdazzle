import React, { useState } from 'react';
import { FaRegCalendarAlt, FaRegComments } from 'react-icons/fa';
import SEO from '../components/SEO';

function Blog() {
    const [currentBlog, setCurrentBlog] = useState("bulk");
    const blogMetaData = {
        title: "Dotdazzle Blog - Insights on Web Development, SEO & Design",
        description:
            "Explore the Dotdazzle blog for the latest trends and insights on web development, SEO, graphic design, branding, and more. Stay ahead in the digital world with us!",
        keywords:
            "DotDazzle blog, web development insights, SEO tips, graphic design trends, branding strategies, digital marketing, IT solutions",
        robots: "index, follow",
        canonical: "https://dotdazzle.in/blog",
        icons: [
            { href: "/favicon.ico", type: "image/x-icon" },
            { href: "/Favicon/favicon.png", sizes: "32x32", type: "image/png" },
        ],
    };
    return (
        <div>
            <SEO metadata={blogMetaData}/>
            <div className="w-full container mx-auto mt-24 px-4">
                <h1 className="text-center text-4xl font-bold">Blog</h1>
                <div className="flex flex-wrap mt-10 gap-6 w-full justify-center">
                    <div className="w-full lg:w-[60%] space-y-5">
                        {currentBlog === "bulk" ? (
                            <div>
                                <img src="blogimg.png" alt="" className="rounded-xl w-full h-auto" />
                                <div className="mt-4">
                                    <div className="flex flex-wrap gap-5">
                                        <h1 className="text-sm font-semibold text-gray-600 flex gap-2 items-center uppercase">
                                            <FaRegCalendarAlt className="text-blue-700" /> November 13, 2024
                                        </h1>
                                        <h1 className="text-sm font-semibold text-gray-600 flex gap-2 items-center uppercase">
                                            <FaRegComments size={16} className="text-blue-700" /> no comments
                                        </h1>
                                    </div>
                                    <div className="mt-4">
                                        <h1 className="text-2xl lg:text-4xl font-bold"> Why Choose Dotdazzle for IT Solutions</h1>
                                        <p className="my-2 text-lg">
                                            In today’s digital-first world, having a reliable and innovative IT partner is essential for businesses looking to thrive. At Dotdazzle, we specialize in empowering businesses with cutting-edge IT solutions that help them stand out in the competitive landscape. With services ranging from SEO and web development to graphic design, our team ensures that your brand not only keeps up with industry trends but also sets benchmarks.
                                        </p>
                                        <h2 className="text-xl lg:text-2xl font-bold">Our Core Services</h2>
                                        <p className="my-2 text-lg">1 .<b> Web Development </b>
                                            A website is the cornerstone of any online presence. Our skilled developers create highly functional, user-friendly websites that are optimized for performance and scalability. Whether you need an e-commerce platform or a corporate site, we deliver solutions tailored to your needs.
                                        </p>
                                        <p className="my-2 text-lg">2 . <b>Search Engine Optimization (SEO)</b> Visibility is key in the digital marketplace. Our SEO experts employ data-driven strategies to improve your website’s search rankings, ensuring you attract the right audience and increase organic traffic.</p>
                                        <p className="my-2 text-lg">3. <b>Web Design</b> First impressions matter. Our designers focus on creating visually stunning and intuitive web designs that captivate your audience and drive engagement.
                                        </p>
                                        <p className="my-2 text-lg">4. <b>Graphic Design </b>
                                            From logos to social media creatives, our graphic design team brings your brand’s vision to life with compelling visuals that resonate with your target audience.</p>

                                        <div>
                                            <h2 className="text-xl lg:text-2xl font-bold my-2">Why Choose Dotdazzle?</h2>
                                            <ul className='text-lg space-y-2'>
                                                <li><p>• <b>Client-Centric Approach:</b> Your success is our priority. We work closely with you to understand your goals and craft personalized solutions.</p></li>
                                                <li><p>•  <b>Innovative Solutions:</b> We stay ahead of industry trends to ensure your business benefits from the latest technologies and practices.</p></li>
                                                <li><p >•  <b>Dedicated Team:</b> Our skilled professionals are passionate about delivering excellence in every project.</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <img src="https://img.freepik.com/premium-vector/protect-payment-template_15115-17.jpg?uid=R83646063&ga=GA1.1.876949767.1667128645&semt=ais_hybrid" alt="" className="rounded-xl w-full h-auto" />
                                <div className="mt-4">
                                    <div className="flex flex-wrap gap-5">
                                        <h1 className="text-sm font-semibold text-gray-600 flex gap-2 items-center uppercase">
                                            <FaRegCalendarAlt className="text-blue-700" /> November 12, 2024
                                        </h1>
                                        <h1 className="text-sm font-semibold text-gray-600 flex gap-2 items-center uppercase">
                                            <FaRegComments size={16} className="text-blue-700" /> no comments
                                        </h1>
                                    </div>
                                    <div className="mt-4">
                                        <h1 className="text-2xl lg:text-4xl font-bold">Importance of IT Services for Businesses</h1>
                                        <p className="my-2 text-lg">
                                            In a world that’s increasingly reliant on technology, IT services have become the backbone of modern businesses. From establishing an online presence to enhancing customer engagement, the role of IT in today’s market is indispensable. At Dotdazzle, we provide comprehensive IT services to help businesses navigate the complexities of the digital age.
                                        </p>
                                        <div>
                                            <h2 className="text-xl lg:text-2xl font-bold">The Role of IT in Business Success</h2>
                                            <p className="my-2 text-lg">1 .<b> Enhancing Brand Visibility </b>
                                                A professionally designed website and optimized digital presence are crucial for attracting and retaining customers. Our web development and SEO services ensure your brand stays visible and competitive.
                                            </p>
                                            <p className="my-2 text-lg">2 . <b>Streamlining Operations</b> Efficient IT solutions simplify workflows and improve productivity. Dotdazzle’s custom web development services can help you automate processes and manage resources effectively.</p>
                                            <p className="my-2 text-lg">3. <b>Improving Customer Experience</b> Engaging designs and user-friendly interfaces are key to a positive customer experience. With our web and graphic design expertise, you can create memorable digital interactions that convert visitors into loyal customers.
                                            </p>
                                        </div>
                                        <div>
                                            <h2 className="text-xl lg:text-2xl font-bold my-2">Dotdazzle’s Unique Approach</h2>
                                            <ul className='text-lg space-y-2'>
                                                <li><p>• <b>Customized Strategies: </b> We understand that no two businesses are alike. Our solutions are tailored to meet the specific challenges and goals of your business.</p></li>
                                                <li><p>•  <b>Holistic Services:</b>  From design to development and marketing, we offer a one-stop solution for all your IT needs.</p></li>
                                                <li><p >•  <b>Measurable Results:</b>  With our data-driven approach, we ensure that every strategy is focused on delivering tangible outcomes.</p></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h2 className="text-xl lg:text-2xl font-bold my-2">Our Services at a Glance</h2>
                                            <ul className='text-lg space-y-2'>
                                                <li><p>• <b> SEO:</b> Improve your search rankings and drive organic traffic.</p></li>
                                                <li><p>•  <b> Web Development:</b>  Create dynamic websites that perform seamlessly.</p></li>
                                                <li><p >•  <b> Web Design: </b> Design user-centric interfaces that captivate.</p></li>
                                                <li><p >•  <b>Graphic Design:</b>  Develop impactful visuals that strengthen your brand identity.</p></li>
                                            </ul>
                                            <p className='text-lg my-3'>At Dotdazzle, we believe in empowering businesses to achieve their full potential through technology. Our team of experts is dedicated to helping you stay ahead of the curve and ensuring your business thrives in the digital landscape. Let’s work together to build a brighter, more connected future for your brand.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="w-full lg:w-[35%] border rounded-2xl p-5 h-fit mt-5 lg:mt-0">
                        <h1 className="font-bold text-xl">Recent Post</h1>
                        <div className="mt-5 gap-5 space-y-3">
                            <div className="flex gap-2 cursor-pointer" onClick={() => setCurrentBlog("bulk")}>
                                <img src="blogimg.png" alt="" className="w-28 h-24 rounded-md" />
                                <div>
                                    <h1 className="text-sm font-semibold text-gray-600 flex gap-2 items-center">
                                        <FaRegCalendarAlt className="text-blue-700" /> November 13, 2024
                                    </h1>
                                    <h1 className="text-lg font-bold leading-6"> Why Choose Dotdazzle for IT Solutions</h1>
                                </div>
                            </div>
                            <div className="flex gap-2 cursor-pointer" onClick={() => setCurrentBlog("security")}>
                                <img src="https://img.freepik.com/premium-vector/protect-payment-template_15115-17.jpg?uid=R83646063&ga=GA1.1.876949767.1667128645&semt=ais_hybrid" alt="" className="w-28 rounded-md h-auto" />
                                <div>
                                    <h1 className="text-sm font-semibold text-gray-600 flex gap-2 items-center">
                                        <FaRegCalendarAlt className="text-blue-700" /> October 28, 2024
                                    </h1>
                                    <h1 className="text-lg font-bold leading-6">Importance of IT Services for Businesses</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
