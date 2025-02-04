import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdAddCall } from "react-icons/md";
import Typewriter from 'typewriter-effect';
import AnimatedButton from '../../../Shared/AnimatedButton';

AOS.init();
const Banner = () => {
    return (
        <div className=''>
            <div
  className="hero lg:min-h-[700px] md:min-h-[400px] min-h-[300px]"
  style={{
    backgroundImage: "url(https://img.freepik.com/premium-photo/tips-choosing-reliable-taxi-service_1186366-157905.jpg)",
  }}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-neutral-content text-center">
    <div  className="">
    <h1  data-aos="fade-up"
    data-aos-duration="2000"
     data-aos-anchor-placement="top-center"  style={{ fontFamily: 'Rancho, serif' }} className="md:text-7xl lg:text-9xl text-4xl flex gap-2 drop-shadow-md justify-center ">
    Welcome to 

        
        <span className="text-yellow-400">
        <Typewriter
  options={{
    strings: ['MD Taxi'],
    autoStart: true,
    loop: true,
  }}
/>
            </span> </h1>
    <h1   data-aos="fade-up"
     data-aos-offset="100"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine"  style={{ fontFamily: 'Rancho, serif' }} className=" text-xl lg:text-5xl md:text-4xl flex text-center justify-center items-center gap-2 drop-shadow-md"><MdAddCall/>Call Now: <span className="text-yellow-400">07783664574</span> </h1>
 
      <p data-aos="zoom-in"  data-aos-duration="1000" className="md:mb-5 mb-2 mt-2 max-w-4xl  mx-auto drop-shadow-md lg:text-xl md:text-[20px] text-xs  text-white">
      MD Taxi Your trusted transportation partner in the beautiful Pembrokeshire region! Whether you need a quick ride to the local shops, a scenic journey to a coastal destination, or a reliable airport transfer!!

      </p>
      <div data-aos="fade-up"
     data-aos-duration="2000" className="flex items-center  drop-shadow-md justify-center">
          {/* <CiSearch className="text-[1.5rem] cursor-pointer" /> */}
          <button className="md:px-6 md:py-3 px-2 py-2 bg-yellow-400 text-black font-bold drop-shadow-md rounded-md cursor-pointer md:text-xl text-xs">
            Book Now
          </button>
        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;