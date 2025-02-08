
import { FaLongArrowAltRight } from 'react-icons/fa';
import bg from '../../../../public/AirportTranser/banner.png'
import { MdAddCall } from 'react-icons/md';
const AirportTranserBanner = () => {
    return (
        <div style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundAttachment: 'fixed'
                    }} 
                    className='bg-[#FFE5DD]  md:h-[800px] h-[500px] ' 
                    id='service'>

                        <div className='  max-w-5xl mx-auto  md:py-40 py-20'>
                            <h1 className='md:text-5xl text-4xl font-bold text-white text-center drop-shadow-md'>Book Your <span className='text-yellow-400'>Airport Transfer</span> Today</h1>
                            <p className=' md:text-xl my-4 text-white text-center drop-shadow-md'>Airport Transfers Start your journey stress-free with our reliable airport transfer service. We cover all major airports, providing timely pickups and drop-offs while tracking your flight for any changes.
                            </p>
                             <div className='flex justify-center'>
                             <button className="flex items-center hover:gap-1 bg-yellow-400 text-black rounded-2xl px-4 py-2 justify-center font-bold drop-shadow-md cursor-pointer">
                                  Read More <FaLongArrowAltRight />
                                </button>
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
                                    <button  className="flex items-center hover:gap-1 bg-black text-white rounded-2xl px-4 py-2 justify-center   mt-2 font-bold drop-shadow-md  cursor-pointer ">
                                                              Book Your Cab <FaLongArrowAltRight className=""/>
                                                             </button>
                                  </div>
                                  </div>
                                      </div>
            
        </div>
    );
};

export default AirportTranserBanner;