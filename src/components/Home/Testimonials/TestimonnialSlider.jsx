/* eslint-disable react/no-unescaped-entities */

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useState } from 'react';
import { useEffect } from 'react';
import bg from '../../../../public/testimonial/taxi.jpeg'
import man1 from '../../../../public/testimonial/man 1.jpg'
import man2 from '../../../../public/testimonial/man2.jpg'
import man3 from '../../../../public/testimonial/man3.jpg'

const TestimonnialSlider = () => {
  const cards = [
    {
      id: 1,
      icon: (
        <img
          className="w-full h-64  rounded-sm"
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
          className="w-full h-64  rounded-sm"
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
          className="w-full h-64  rounded-sm"
          src={man3}
          alt="man3"
        />
      ),
      name: "Emily R.",
      description:'“Superb experience! The driver was knowledgeable about Pembrokeshire, which made the ride more enjoyable.”'
     
    },
   
    {
      id: 5,
      icon: (
        <img
          className="w-full h-64  rounded-sm"
          src="https://s3-alpha-sig.figma.com/img/d30d/2972/6ef940ae0353ae9879b5ad00a08218dc?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W5qUH56SgHYN8APDOFWmegST1M9FLvwHuS76cGFj9XHvPwfp8Ta9m2MQva0ostSzfOgN1xSrtSfEkDQsyFAka65MJMUIvkcxWzgWYDYBp1CsH45gipkkX6wzPHO8wNeh21K3iO6efUDtsmjK5Th-GAsaBk2NUJDtgQpeF~8cOpbUc4BVA~WICbQu3sC92yOEB8Qbt7ZZbFwQw284pLF2UuUEDV-mx3DDbQok~J3zpjEh2ehskbkZjT93YVicdyZxosj7QqqNd8QyOsjOWOIzaKfCbU2Foe7S2aAXRuM93YT91xSe254qpBWILzlxqf6~8sWWM~XNRDCftn51IcSTlg__"
          alt=""
        />
      ),
      name: "Quality Residence",
     
    },
    {
      id: 6,
      name: "Top Notch Facilities",
      icon: (
        <img
          className="w-full h-64  rounded-sm"
          src="https://s3-alpha-sig.figma.com/img/6cbc/cb21/55f6a8acd8dd350402f9f109ac2f2964?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adNBO5HC3dVLmyeq3xYPKq7r0uigoPPsB3RnmUqq9GJg31fLX~jozlvNgv4nG50U7Nybm6rNHHcapApGlnd8gq68Y9G-zaXuGIrUOAJGKnkFwn9tIKD0oPyBwYQlqZyLO7un4JyvG3THvaZk4Xt2KvFnr-B84UR1XYaOBJrBEULRQJU0kqtPvCkXLT77nSi7Y~GpZ1F4v35zBSeXqEXSECUGi~VwjK3s5L~9JRNV1M5ZrbWRy5sxAmCG-J7REAneFLy2IwHxoj0dteTM6VXP3dTkZRN98RsVE-~vlvYbzBXAf10j4ZfOsd-nSnfQtMTA9A4KVDQCo8iGyRjSt557cA__"
          alt=""
        />
      ),
     
    },
    {
      id: 7,
      icon: (
        <img
          className="w-full h-64  rounded-sm"
          src="https://s3-alpha-sig.figma.com/img/d30d/2972/6ef940ae0353ae9879b5ad00a08218dc?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W5qUH56SgHYN8APDOFWmegST1M9FLvwHuS76cGFj9XHvPwfp8Ta9m2MQva0ostSzfOgN1xSrtSfEkDQsyFAka65MJMUIvkcxWzgWYDYBp1CsH45gipkkX6wzPHO8wNeh21K3iO6efUDtsmjK5Th-GAsaBk2NUJDtgQpeF~8cOpbUc4BVA~WICbQu3sC92yOEB8Qbt7ZZbFwQw284pLF2UuUEDV-mx3DDbQok~J3zpjEh2ehskbkZjT93YVicdyZxosj7QqqNd8QyOsjOWOIzaKfCbU2Foe7S2aAXRuM93YT91xSe254qpBWILzlxqf6~8sWWM~XNRDCftn51IcSTlg__"
          alt=""
        />
      ),
      name: "Quality Residence",
     
    },
    
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
      <p className='text-center text-yellow-400 text-xl font-semibold
       drop-shadow-md uppercase'>Testimonials</p>
      <h2 className='text-5xl pb-5 font-bold flex flex-col items-center text-white drop-shadow-md'>What Our Customers <span className='text-yellow-400'>Say's</span></h2>
      <Slider {...sliderSettings}>
        {cards.map(card => (
          <div className='px-5' key={card.id}>
    

    <article className="hover:animate-background rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className=" rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
        <time className="block text-xs text-gray-500" dateTime="2019-06-29">
          29th June 2019
        </time>
        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Next.js crash course by KhateykoBan
          </h3>
        </a>
        <div className="mt-4 flex flex-wrap gap-1">
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
            Snippet
          </span>
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
            JavaScript
          </span>
        </div>
      </div>
    </article>


          </div>
        ))}
      </Slider>
    </div>
  </div>
  
  
  )
}

export default TestimonnialSlider;