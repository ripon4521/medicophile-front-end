
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

                        <div className='  max-w-5xl mx-auto  md:py-80 py-20'>
                            <h1 className='md:text-5xl text-4xl font-bold text-white text-center drop-shadow-md'>Book Your <span className='text-yellow-400'>Airport Transfer</span> Today</h1>
                            <p className=' md:text-xl my-4 text-white text-center drop-shadow-md'>Airport Transfers Start your journey stress-free with our reliable airport transfer service. We cover all major airports, providing timely pickups and drop-offs while tracking your flight for any changes.
                            </p>
                             <div className='flex justify-center'>
                             <button className="flex items-center hover:gap-1 bg-yellow-400 text-black rounded-2xl px-4 py-2 justify-center font-bold drop-shadow-md cursor-pointer">
                                  Read More <FaLongArrowAltRight />
                                </button>
                             </div>
                        </div>
                        
            
        </div>
    );
};

export default AirportTranserBanner;