
import { TbChevronRight } from "react-icons/tb";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import taxi from '../../../../public/AboutUs/01-removebg-preview.png'



const AboutUs = () => {

    

    return (
       <div className=" drop-shadow-md ">

         <div className="flex py-10 flex-col lg:flex-row  lg:gap-20 gap-10 items-center mt-10 max-w-7xl  mx-auto">

           <div data-aos="fade-up"
     data-aos-duration="2000" >
        <p className="flex justify-center absolute bg-black text-white gap-2 px-3 drop-shadow-md items-center w-[220px] py-1 rounded-2xl ml-10 z-10">
  <MdOutlineTipsAndUpdates className="w-10 bg-amber-400 h-10 p-1 rounded-md text-white" /> 
  Reliable & Affordable Rides
</p>

    
           <img className="lg:w-[700px] md:w-[600px] w-[350px] relative" src={taxi} alt="" />
        
           </div>

            <div className="drop-shadow-md px-5">
                <p data-aos="fade-up"
     data-aos-duration="2000"  className="font-semibold  md:text-xl uppercase text-yellow-400">About Us</p>

                <h1 data-aos="fade-up"
     data-aos-duration="2000" className="md:text-5xl text-4xl my-2 font-bold drop-shadow-md">We Provide Trusted <span className="text-[#FFB329]">Cab Service</span> In  Pembrokeshire</h1>
                <p data-aos="fade-up"
     data-aos-duration="2000" className="text-gray-600 dro">MD Taxi is here to provide safe, comfortable, and efficient rides. Book your journey today and discover the MD Taxi difference!
</p>
                <ul data-aos="fade-up"
     data-aos-duration="2000" className="text-gray-600">
                    <li data-aos="fade-up"
     data-aos-duration="1000" className="flex justify-start items-start my-2 gap-2"><TbChevronRight className="w-5 h-5 bg-amber-400 rounded-full text-white"/>MD Taxi is here to provide safe, comfortable, and efficient rides</li>
                    <li data-aos="fade-up"
     data-aos-duration="1000" className="flex justify-start items-start my-2 gap-2"><TbChevronRight className="w-5 h-5 bg-amber-400 rounded-full text-white"/>MD Taxi Your trusted transportation partner in the beautiful Pembrokeshire region!</li>

                    <li data-aos="fade-up"
     data-aos-duration="1000" className="flex justify-start items-start my-2 gap-2"><TbChevronRight className="w-5 h-5 bg-amber-400 rounded-full text-white"/>Use our easy online booking system to schedule your ride in just a few clicks.</li>

                </ul>

                    <button data-aos="fade-up"
     data-aos-duration="2000" className="flex items-center hover:gap-1 bg-yellow-400 text-black rounded-2xl px-4 py-2 justify-center   mt-6 font-bold drop-shadow-md  cursor-pointer ">
                            Discover <FaLongArrowAltRight className=""/>
                           </button>

            </div>
            
        </div> 
        {/* <img className="justify-end absolute md:-m-[420px] hidden md:block  w-full" src="/src/assets/Union.png" alt="" /> */}
        <img className="justify-start absolute md:-m-[420px] hidden md:block  w-full" src="/src/assets/union3.png" alt="" />
       </div>
    );
};

export default AboutUs;