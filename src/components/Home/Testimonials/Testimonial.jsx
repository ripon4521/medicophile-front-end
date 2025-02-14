/* eslint-disable react/no-unescaped-entities */
import { FaLongArrowAltRight } from 'react-icons/fa';
import bg from '../../../../public/testimonial/taxi.jpeg'
import { MdAddCall } from 'react-icons/md';
import man1 from '../../../../public/testimonial/man 1.jpg'
import man2 from '../../../../public/testimonial/man2.jpg'
import women1 from '../../../../public/testimonial/women1.jpg'
import women2 from '../../../../public/testimonial/women2.jpg'
import man3 from '../../../../public/testimonial/man3.jpg'

export function Testimonial() {
	return (
		<section   style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }} 
            className='bg-[#FFE5DD]  relative' 
            id='service' >
		  <div  className="mx-auto max-w-7xl px-5 py-5 md:px-10 md:py-10">
		    {/* Heading Text */}
            <p data-aos="fade-up"
               data-aos-duration="2000" className='text-center text-yellow-400 md:text-xl font-semibold
       drop-shadow-md uppercase'>Testimonials</p>
      <h2 data-aos="fade-up"
               data-aos-duration="2000" className='md:text-5xl text-3xl pb-5 font-bold flex flex-col items-center text-white drop-shadow-md'>What Our Customers <span className='text-yellow-400 '>Say's</span></h2>
		    {/* Testimonial Wall */}
		    <div data-aos="fade-up"
               data-aos-duration="2000" className="mb-8 gap-5 py-4 md:mb-12 columns-1 c-col-1 sm:columns-2 c-sm-col-2 md:columns-3 c-md-col-3 lg:mb-16 drop-shadow-md">
		      {/* Item */}
              <div
  data-aos="fade-up"
  data-aos-duration="2000"
  className="relative mb-6 gap-6 overflow-hidden rounded-2xl border border-gray-300 bg-white p-8 transition-all duration-300 hover:border-4 hover:border-yellow-500"
>
  <div className="mb-4 flex flex-row">
    <img
      src={man1}
      alt="man1"
      className="mr-4 inline-block h-16 w-16 object-cover rounded-full hover:scale-110 transform transition-transform duration-300"
    />
    <div className="flex flex-col">
      <h6 className="text-base font-semibold hover:text-yellow-500 transition-colors duration-300">
        Sarah J.
      </h6>
      <p className="text-sm text-gray-500">CEO/ Chairman</p>
    </div>
  </div>
  <p className="mb-4 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300">
    “MD Taxi made my airport transfer seamless! The driver was friendly and on time. Highly recommend!”
  </p>
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <img
        key={index}
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
        alt=""
        className="mr-1.5 inline-block w-4 flex-none hover:scale-125 transform transition-transform duration-300"
      />
    ))}
  </div>
</div>



		      {/* Item */}
              <div
  data-aos="fade-up"
  data-aos-duration="2000"
  className="relative mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8 transition-all duration-300 hover:border-4 hover:border-yellow-500"
>
  <div className="mb-4 flex flex-row">
    <img
      src={man2}
      alt="man2"
      className="mr-4 inline-block h-16 w-16 object-cover rounded-full hover:scale-110 transform transition-transform duration-300"
    />
    <div className="flex flex-col">
      <h6 className="text-base font-semibold hover:text-yellow-400 transition-colors duration-300">
        John K.
      </h6>
      <p className="text-sm text-gray-500">CEO/ Chairman</p>
    </div>
  </div>
  <p className="mb-4 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300">
    “I rely on MD Taxi for all my business trips. Excellent service and very professional!”
  </p>
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <img
        key={index}
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
        alt=""
        className="mr-1.5 inline-block w-4 flex-none hover:scale-125 transform transition-transform duration-300"
      />
    ))}
  </div>
</div>

		      {/* Item */}
              <div
  data-aos="fade-up"
  data-aos-duration="2000"
  className="relative mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8 transition-all duration-300 hover:border-4 hover:border-yellow-500 hover:shadow-lg hover:scale-105"
>
  <div className="mb-4 flex flex-row">
    <img
      src={women1}
      alt=""
      className="mr-4 inline-block h-16 w-16 object-cover rounded-full hover:scale-110 transform transition-transform duration-300"
    />
    <div className="flex flex-col">
      <h6 className="text-base font-semibold hover:text-yellow-400 transition-colors duration-300">
        Priya M.
      </h6>
      <p className="text-sm text-gray-500">Operations Manager, Horizon Ltd.</p>
    </div>
  </div>
  <p className="mb-4 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300">
    "MD Taxi has earned my trust with its outstanding service. The drivers are prompt, professional, and respectful. I always reach my destinations comfortably and on time. Highly recommended for dependable transportation."
  </p>
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <img
        key={index}
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
        alt=""
        className="mr-1.5 inline-block w-4 flex-none hover:scale-125 transform transition-transform duration-300"
      />
    ))}
  </div>
</div>

		      {/* Item */}
              <div
  data-aos="fade-up"
  data-aos-duration="2000"
  className="relative mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8 transition-all duration-300 hover:border-4 hover:border-yellow-500 hover:shadow-lg hover:scale-105"
>
  <div className="mb-4 flex flex-row">
    <img
      src={women2}
      alt=""
      className="mr-4 inline-block h-16 w-16 object-cover rounded-full hover:scale-110 transform transition-transform duration-300"
    />
    <div className="flex flex-col">
      <h6 className="text-base font-semibold hover:text-yellow-400 transition-colors duration-300">
        Emily R.
      </h6>
      <p className="text-sm text-gray-500">CEO/ Chairman</p>
    </div>
  </div>
  <p className="mb-4 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300">
    “Superb experience! The driver was knowledgeable about Pembrokeshire, which made the ride more enjoyable.”
  </p>
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <img
        key={index}
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
        alt=""
        className="mr-1.5 inline-block w-4 flex-none hover:scale-125 transform transition-transform duration-300"
      />
    ))}
  </div>
</div>

		      {/* Item */}
              <div
  data-aos="fade-up"
  data-aos-duration="2000"
  className="relative mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8 transition-all duration-300 hover:border-4 hover:border-yellow-500 hover:shadow-lg hover:scale-105"
>
  <div className="mb-4 flex flex-row">
    <img
      src={man3}
      alt=""
      className="mr-4 inline-block h-16 w-16 object-cover rounded-full hover:scale-110 transform transition-transform duration-300"
    />
    <div className="flex flex-col">
      <h6 className="text-base font-semibold hover:text-yellow-400 transition-colors duration-300">
        Ahmed R.
      </h6>
      <p className="text-sm text-gray-500">Chairman, Bengal Exports</p>
    </div>
  </div>
  <p className="mb-4 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300">
    "MD Taxi offers top-class service. Their drivers are always polite and know the fastest routes. I appreciate their professionalism and reliability. It's the ideal solution for both business and leisure travel."
  </p>
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <img
        key={index}
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
        alt=""
        className="mr-1.5 inline-block w-4 flex-none hover:scale-125 transform transition-transform duration-300"
      />
    ))}
  </div>
</div>

		      {/* Item */}
              <div
  data-aos="fade-up"
  data-aos-duration="2000"
  className="relative mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8 transition-all duration-300 hover:border-4 hover:border-yellow-500 hover:shadow-lg hover:scale-105"
>
  <div className="mb-4 flex flex-row">
    <img
      src={man1}
      alt=""
      className="mr-4 inline-block h-16 w-16 object-cover rounded-full hover:scale-110 transform transition-transform duration-300"
    />
    <div className="flex flex-col">
      <h6 className="text-base font-semibold hover:text-yellow-400 transition-colors duration-300">
        David James
      </h6>
      <p className="text-sm text-gray-500">CEO/ Chairman</p>
    </div>
  </div>
  <p className="mb-4 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300">
    "MD Taxi provides exceptional service with courteous and skilled drivers. I appreciate their punctuality and clean, well-maintained vehicles. A top choice for business and personal trips alike."
  </p>
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <img
        key={index}
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
        alt=""
        className="mr-1.5 inline-block w-4 flex-none hover:scale-125 transform transition-transform duration-300"
      />
    ))}
  </div>
</div>

		    </div>


		  </div>
           <div  className='bg-[#FFB300] w-full drop-shadow-md ' >
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
            <button   className=" hover:gap-1 bg-black text-white rounded-2xl px-4 py-2 justify-center   mt-2 font-bold drop-shadow-md  cursor-pointer ">
                                    <a href="tel:+447783664574" className='flex items-center'>  Book Your Cab <FaLongArrowAltRight className=""/></a>
                                     </button>
          </div>
          </div>
              </div>
		</section>
	);
}
			