
import { TbChevronRight } from "react-icons/tb";
import { MdOutlineTipsAndUpdates } from "react-icons/md";


const AboutUs = () => {
    return (
       <div className="bg-gray-50 drop-shadow-md mb-20">
         <div className="flex py-10 flex-col lg:flex-row  lg:gap-20 gap-10 items-center mt-10 max-w-7xl  mx-auto">
           <div data-aos="fade-up"
     data-aos-duration="2000" >
        <p className="flex justify-center absolute bg-black text-white gap-2 px-2 drop-shadow-md    items-center w-[200px] py-1 rounded-2xl mt-5 ml-10 z-10"><MdOutlineTipsAndUpdates className="w-10 bg-amber-400 h-10 p-1 rounded-md text-white "/> 30 Years Of
        Quality Service</p>
           <img className="lg:w-[900px] md:w-[600px] w-[350px] relative" src="https://live.themewild.com/taxica/assets/img/about/01.png" alt="" />
           </div>
            <div className="drop-shadow-md px-5">
                <p data-aos="fade-up"
     data-aos-duration="2000"  className="text-amber-400 font-semibold drop-shadow-md md:text-xl uppercase">About Us</p>
                <h1 data-aos="fade-up"
     data-aos-duration="2000" className="md:text-6xl text-4xl my-2 font-bold drop-shadow-md">We Provide Trusted <span className="text-[#FFB329]">Cab Service</span> In The World</h1>
                <p data-aos="fade-up"
     data-aos-duration="2000" className="text-black dro">MD Taxi is here to provide safe, comfortable, and efficient rides. Book your journey today and discover the MD Taxi difference!
</p>
                <ul data-aos="fade-up"
     data-aos-duration="2000">
                    <li data-aos="fade-up"
     data-aos-duration="1000" className="flex justify-start items-start my-2 gap-2"><TbChevronRight className="w-5 h-5 bg-amber-400 rounded-full text-white"/>MD Taxi is here to provide safe, comfortable, and efficient rides</li>
                    <li data-aos="fade-up"
     data-aos-duration="1000" className="flex justify-start items-start my-2 gap-2"><TbChevronRight className="w-5 h-5 bg-amber-400 rounded-full text-white"/>MD Taxi Your trusted transportation partner in the beautiful Pembrokeshire region!</li>

                    <li data-aos="fade-up"
     data-aos-duration="1000" className="flex justify-start items-start my-2 gap-2"><TbChevronRight className="w-5 h-5 bg-amber-400 rounded-full text-white"/>Use our easy online booking system to schedule your ride in just a few clicks.</li>

                </ul>
            </div>
        </div> 
       </div>
    );
};

export default AboutUs;