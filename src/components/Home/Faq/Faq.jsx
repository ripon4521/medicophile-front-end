/* eslint-disable react/no-unescaped-entities */
import  { useState } from 'react';
import faq from '../../../../public/faq/01.jpg'
import { FaQuestion } from "react-icons/fa";

 // Utility for conditional classnames if needed

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: '1. How do I book a ride?',
      answer: 'You can easily book online through our website or call our customer service team.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit/debit cards, and various mobile payment options.',
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking up to 1 hour before your scheduled pickup time without any fees.',
    },
    {
      question: 'What areas do you serve?',
      answer: (
        <ul className="list-disc pl-5 mt-2 text-sm sm:text-base">
          <li>Cosheston</li>
          <li>Pembroke</li>
          <li>Pembroke Dock</li>
          <li>Tenby</li>
          <li>Saundersfoot</li>
          <li>Manorbier</li>
          <li>Carew</li>
          <li>Bluestone Resort</li>
          <li>Narberth</li>
          <li>Kilgetty</li>
          <li>Milford Haven</li>
          <li>Haverfordwest</li>
          <li>Angle</li>
          <li>Pembrokeshire Coast Path</li>
        </ul>
      ),
    },
  ];
  
  return (
  <div className='bg-gray-100 '>
      <section className="py-10 md:py-10 mx-auto w-full max-w-7xl px-5 md:px-10 ">
      <div className="flex flex-col items-start lg:flex-row lg:space-x-20">
        <div className=" max-w-6xl mx-auto flex-none">
          <div data-aos="fade-up"
     data-aos-duration="2000" className="w-full mb-8 md:mb-12 lg:mb-16">
            <p   className='uppercase text-yellow-400 text-xl font-bold'>Faq's</p>
            <h2 className="font-bold drop-shadow-md max-w-xl text-3xl md:text-5xl">General <span className='text-yellow-500'>Frequently</span> Asked Questions</h2>
            <div className="mt-4 max-w-lg">
              <p className="text-gray-500 text-sm sm:text-base">
              Our cab booking service allows you to easily schedule rides through our user-friendly platform. 
              </p>
              <img data-aos="fade-up"
     data-aos-duration="2000" className='rounded-lg  mt-3' src={faq} alt="faq" />
            </div>
          </div>
          <div className=" h-full w-full overflow-auto bg-gray-100 p-8 rounded-md">
           
    
          </div>
        </div>
        <div  className="lg:flex-[1_1_500px] w-full flex-none -mt-10 md:-mt-0 lg:mt-5">
          {faqItems.map((item, index) => (
            <div data-aos="fade-up"
     data-aos-duration="2000"
              key={index}
              className="mb-6 w-full overflow-hidden bg-white shadow rounded-lg p-8 "
            >
              <div
                className="flex cursor-pointer items-start justify-between"
                onClick={() => toggleAccordion(index)}
              >
                <p className="text-xl font-bold flex items-center gap-2"> <span className='bg-yellow-400 p-2 rounded-full'><FaQuestion className=' text-xl '/></span> {item.question}</p>
                <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                  <div
                    className={`absolute h-5 w-1 bg-yellow-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-90' : 'rotate-0'}`}
                  ></div>
                  <div className="h-1 w-5 bg-yellow-400"></div>
                </div>
              </div>
              {activeIndex === index && (
                <div className="w-full overflow-hidden mb-4 max-w-2xl lg:max-w-4xl">
                    
                    <hr  className='text-yellow-400 mt-2'/>
                  <p className="text-sm sm:text-base mt-4">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};

export default Faq;