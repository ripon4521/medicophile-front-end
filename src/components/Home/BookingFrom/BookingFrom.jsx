import { IoLocationOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { FaLongArrowAltRight } from "react-icons/fa";




const BookingFrom = () => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="2000" className="bg-white shadow lg:max-w-4xl md:max-w-2xl mx-auto px-5 py-5 lg:-mt-32 md:-mt-10 z-90 opacity-90 rounded-2xl "> 
            <h2 className="text-center text-2xl font-bold drop-shadow-md mb-3">Book Your Ride</h2>
            <hr />
            <form action="" className="flex flex-col mt-4  gap-5">

          <div className="flex flex-col  md:flex-row   gap-5">
          <div className="w-full md:w-[80%] relative">
                <span>Pick Up Location</span>
                <IoLocationOutline
                    className=" absolute mt-4 left-3 text-[1.5rem] text-[#777777]"/>
                <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Type Location"
                    className="peer mt-1 border-border border border-gray-300 rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-yellow-400 transition-colors duration-300"
                />
                
            </div>

            <div className="w-full md:w-[80%] relative">
                <span>Drop Off Location</span>
                <IoLocationOutline
                    className=" absolute mt-4 left-3 text-[1.5rem] text-[#777777]"/>
                <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Type Location"
                    className="peer mt-1 border-border border border-gray-300 rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-yellow-400 transition-colors duration-300"
                />
            </div>

            <div className="w-full md:w-[80%] relative">
                <span>Passengers</span>
                <GrUserManager
                    className=" absolute mt-4 left-3 text-[1.2rem] text-[#777777]"/>
                <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Passengers"
                    className="peer mt-1 border-border border border-gray-300 rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-yellow-400 transition-colors duration-300"
                />
            </div>

          </div>


          <div className="flex flex-col md:flex-row  gap-5">


          <div className="w-full md:w-[80%] relative">
                <span>Pick Up Date</span>
                
                    
                <input
                    type="date"
                    name="text"
                    id="text"
                
                    className="peer mt-1 border-border border border-gray-300 rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-yellow-400 transition-colors duration-300"
                />
            </div>

            <div className="w-full md:w-[80%] relative">
                <span>Pick Up Time</span>
                
                <input
                    type="time"
                    name="text"
                    id="text"
                    placeholder="Type Location"
                    className="peer mt-1 border-border border border-gray-300 rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-yellow-400 transition-colors duration-300"
                />
            </div>

           <button className="flex items-center gap-2 bg-yellow-400 text-black rounded-2xl px-4  justify-center w-full md:w-[80%] h-14 mt-6 font-bold drop-shadow-md text-xl cursor-pointer ">
            Book Taxi <FaLongArrowAltRight className=""/>
           </button>

          </div>


            </form>
        </div>
    );
};

export default BookingFrom;