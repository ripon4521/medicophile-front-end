/* eslint-disable react/no-unescaped-entities */

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useState } from 'react';
import { useEffect } from 'react';

import man1 from '../../../../public/testimonial/man 1.jpg'
import man2 from '../../../../public/testimonial/man2.jpg'
import man3 from '../../../../public/testimonial/man3.jpg'
import { MdAddCall } from "react-icons/md";
import { FaLongArrowAltRight } from 'react-icons/fa';


const TestimonnialSlider = () => {
  const cards = [
    {
      id: 1,
      icon: (
        <img
          className="w-20 h-20  rounded-full"
          src={man1}
          alt="man1"
        />
      ),
      name: "Sarah J",
      description:"“MD Taxi made my airport transfer seamless! The driver was friendly and on time. Highly recommend!”"
     
    },
    {
      id: 2,
      icon: (
        <img
          className="w-20 h-20  rounded-full"
          src={man2}
          alt="man"
        />
      ),
      name: "John K.",
      description: "“I rely on MD Taxi for all my business trips. Excellent service and very professional!”"
     
    },
    {
      id: 3,
      icon: (
        <img
          className="w-20 h-20   rounded-full"
          src={man3}
          alt="man3"
        />
      ),
      name: "Emily R.",
      description:'“Superb experience! The driver was knowledgeable about Pembrokeshire, which made the ride more enjoyable.”'
     
    }
   
   
    
  ];  
  
  const [sliderSettings, setSliderSettings] = useState(getSliderSettings());

  useEffect(() => {
    function handleResize() {
      setSliderSettings(getSliderSettings());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getSliderSettings() {
    return {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      slidesToShow: window.innerWidth < 768 ? 1 : 3,
      slidesToScroll: 1,
    };
  }
    
  return (
 <div>
     <div 
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }} 
    className='bg-[#FFE5DD] py-10 px-10 lg:px-16 ' 
    id='service'
  >
    <div className='max-w-7xl mx-auto'>
      <p className='text-center text-yellow-400 md:text-xl font-semibold
       drop-shadow-md uppercase'>Testimonials</p>
      <h2 className='md:text-5xl text-3xl pb-5 font-bold flex flex-col items-center text-white drop-shadow-md'>What Our Customers <span className='text-yellow-400 '>Say's</span></h2>
      <Slider {...sliderSettings}>
  {cards.map((card) => (
    <div className="p-5" key={card.id}>
      <div className="hover:border-amber-500 hover:border bg-amber-50 drop-shadow-md rounded-xl shadow-lg overflow-hidden p-6 flex flex-col items-center">
        <div className="mb-4 drop-shadow-md">{card.icon}</div>
      
        
        <h3 className="text-xl font-semibold text-black drop-shadow-md">{card.name}</h3>
      
   
        <p className="drop-shadow-md mt-3 text-center relative">{card.description}</p>
      {/* <h1 style={{ fontFamily: 'Rancho, serif' }} className=' '>99</h1> */}
      </div>
    </div>
  ))}
</Slider>



    </div>


  </div>
  <div data-aos="fade-up"
     data-aos-duration="2000" className='bg-yellow-500 w-full drop-shadow-md ' >
<div data-aos="fade-up"
     data-aos-duration="2000" className='max-w-6xl mx-auto flex md:py-20 py-10 px-2 text-white flex-col md:flex-row md:gap-10 gap-5'>
<div data-aos="fade-up"
     data-aos-duration="2000" className='max-w-2xl border-r-4  '>
<h1  className='md:text-5xl text-3xl drop-shadow-md font-bold   max-w-2xl'>Book Your Cab It's Simple And Affordable</h1>
<p className='drop-shadow-md'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout point of using is that it has normal distribution of letters.</p>
</div>
<div data-aos="fade-up"
     data-aos-duration="2000">
  <p className='flex items-center gap-1 text-3xl font-bold'><MdAddCall/> (+44) 07783664574</p>
  <button  className="flex items-center hover:gap-1 bg-black text-white rounded-2xl px-4 py-2 justify-center   mt-2 font-bold drop-shadow-md  cursor-pointer ">
                            Book Your Cab <FaLongArrowAltRight className=""/>
                           </button>
</div>
</div>
    </div>
 </div>
  
  
  )
}

export default TestimonnialSlider;