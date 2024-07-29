import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterestP, FaYoutube, FaCalendarAlt, FaMailBulk, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6'


const Footer = () => {
    return (
        <footer className="bg-black text-white w-full border-t border-gray-200">
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li className="hover:translate-x-4 duration-300"><a href="#" >New Arrivals</a></li>
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Men</a></li>
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Women</a></li>
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Kids</a></li>
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Nightwear</a></li>
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Summer sale</a></li>
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Shoes</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Discover</h3>
                        <ul className="space-y-2">
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Blog</a></li>
                            <li className="hover:translate-x-4 duration-300"><Link  href="faqs">FAQ's</Link></li>
                            <li className="hover:translate-x-4 duration-300"><Link  href="aboutus">About us</Link></li>
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Gift Card</a></li>
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Sitemap</a></li>
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Refer & Earn</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Information</h3>
                        <ul className="space-y-2">
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Help</a></li>
                            <li className="hover:translate-x-4 duration-300" ><a href="/account" >My Account</a></li>
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Track Order</a></li>
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Privacy Policy</a></li>
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Delivery Information</a></li>
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Refund, Exchanges and Returns</a></li>
                            <li className="hover:translate-x-4 duration-300"><a href="#" >Terms of Use</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Customer Service</h3>
                        <ul className="space-y-2">
                            <li>Contact</li>
                            <li className="flex items-center"><FaCalendarAlt className="mr-2" /><span>Mon-Fri - 9:00 AM to 5:00 PM (IST)</span></li>
                            <li className="flex items-center"><FaPhone className="mr-2" /><a href="tel:+919878787876" >+91 9878787876</a></li>
                            <li className="flex items-center"><FaMailBulk className="mr-2" /><a href="mailto:orders@clickmyorder.com" >
                                orders@clickmyorder.com</a></li>
                            <li className="flex items-center"><FaLocationDot className="mr-2" />
                                <address>
                                    3rd Floor, B 29-30, B 39-40,<br />
                                    Industrial Area, Nayi Sadak,<br />
                                    Sharma Colony, Ashok Nagar,<br />
                                    Pune, Maharashtra 388011
                                </address>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>
            <hr className='mb-4'></hr>
            <h3 className="text-center mb-3">Stay Connected</h3>
            <div className="mt-0 flex space-x-4 justify-center mb-5">
                <a href="#" className="text-gray-700 hover:text-gray-900">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                        <FaFacebookF className="w-6 h-6" />
                    </div>
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                        <FaLinkedinIn className="w-6 h-6" />
                    </div>
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                        <FaInstagram className="w-6 h-6" />
                    </div>
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                        <FaPinterestP className="w-6 h-6" />
                    </div>
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                        <FaYoutube className="w-6 h-6" />
                    </div>
                </a>
            </div>
            <div className=" bg-white text-black text-center p-2">
                &copy; {new Date().getFullYear()} ClickMyOrder. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
