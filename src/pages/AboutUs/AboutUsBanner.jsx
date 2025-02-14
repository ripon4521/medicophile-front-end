import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLongArrowAltRight } from 'react-icons/fa';
import bg from '../../../public/AirportTranser/about-us.jpg';
import { MdAddCall } from 'react-icons/md';

const AboutUsBanner = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundAttachment: 'fixed'
                    }} 
                    className='bg-[#FFE5DD]' 
                    id='about'>

            <div className='max-w-5xl mx-auto md:py-40 py-20' data-aos="fade-up">
                <h1 className='md:text-5xl text-4xl font-bold text-white text-center drop-shadow-md' data-aos="zoom-in">About <span className='text-yellow-400'>MD Taxi</span></h1>
                <p className='md:text-xl my-4 text-white text-center drop-shadow-md' data-aos="fade-up">MD Taxi is committed to providing top-quality, reliable, and affordable transportation services across London. With our experienced drivers and well-maintained vehicles, we ensure a smooth, comfortable, and hassle-free ride for all our customers.</p>
                <div className='flex justify-center'>
                    <button className="flex items-center hover:gap-1 bg-yellow-400 text-black rounded-2xl px-4 py-2 justify-center font-bold drop-shadow-md cursor-pointer" data-aos="fade-up"> 
                        Read More <FaLongArrowAltRight />
                    </button>
                </div>
            </div>
            <div className='bg-[#FFB300] w-full drop-shadow-md'>
                <div className='max-w-6xl mx-auto flex md:py-20 py-10 px-2 text-white flex-col md:flex-row md:gap-10 gap-5'>
                    <div className='max-w-2xl border-r-4' data-aos="fade-right">
                        <h1 className='md:text-5xl text-3xl drop-shadow-md font-bold max-w-2xl'>Why Choose MD Taxi?</h1>
                        <p className='drop-shadow-md'>We prioritize your safety, comfort, and punctuality. Our professional drivers are trained to provide a seamless experience while ensuring you reach your destination on time. Whether it's a local ride, airport transfer, or special event, we've got you covered.</p>
                    </div>
                    <div data-aos="fade-left">
                        <p className='flex items-center gap-1 text-3xl font-bold'><MdAddCall/> (+44) 07783664574</p>
                        <button className="flex items-center hover:gap-1 bg-black text-white rounded-2xl px-4 py-2 justify-center mt-2 font-bold drop-shadow-md cursor-pointer" data-aos="zoom-in">
                            Book Your Ride <FaLongArrowAltRight className=""/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsBanner;
