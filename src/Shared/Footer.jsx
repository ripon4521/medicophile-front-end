
import React from "react";

// react icons
import {CgFacebook} from "react-icons/cg";
import {BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-black boxShadow rounded-xl w-full p-6 md:p-9">
            <div className="flex justify-center gap-[30px] flex-wrap w-full sm:px-32">
                <div data-aos="fade-up"
     data-aos-duration="2000"
                    className="flex justify-center sm:justify-between gap-[30px] w-full flex-wrap">
                    <p className="text-[1rem] text-white hover:text-yellow-500 font-bold drop-shadow-md cursor-pointer transition-all duration-200 ">Home</p>
                    <p className="text-[1rem] text-white hover:text-yellow-500 font-bold drop-shadow-md cursor-pointer transition-all duration-200">Airport Transfer</p>
                    <p className="text-[1rem] text-white hover:text-yellow-500 font-bold drop-shadow-md cursor-pointer transition-all duration-200">Local Ride</p>
                    <p className="text-[1rem] text-white hover:text-yellow-500 font-bold drop-shadow-md cursor-pointer transition-all duration-200">Special Events</p>
                    <p className="text-[1rem] text-white hover:text-yellow-500 font-bold drop-shadow-md cursor-pointer transition-all duration-200">About Us</p>
                    <p className="text-[1rem] text-white hover:text-yellow-500 font-bold drop-shadow-md cursor-pointer transition-all duration-200">Contact Us</p>
                    
                
                
                
                </div>

                <div data-aos="fade-up"
     data-aos-duration="2000" className="flex items-center flex-wrap gap-[10px] text-white">
                    <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-black hover:bg-yellow-400 transition-all duration-300 drop-shadow-md">
                        <CgFacebook/>
                    </a>
                    <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-black hover:bg-yellow-400 transition-all duration-300 drop-shadow-mddrop-shadow-md">
                        <BsTwitter/>
                    </a>
                    <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-black hover:bg-yellow-400 transition-all duration-300 drop-shadow-md">
                        <BsInstagram/>
                    </a>
                    <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-black hover:bg-yellow-400 transition-all duration-300 drop-shadow-md">
                        <BsLinkedin/>
                    </a>
                </div>


                <div 
                    className="border-t border-gray-200 pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center">
                    <p  className="text-[0.8rem] sm:text-[0.9rem] text-white">© 2025 MD Taxi
                        . All Rights
                        Reserved. </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
                    