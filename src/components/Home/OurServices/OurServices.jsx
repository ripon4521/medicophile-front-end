import { FaLongArrowAltRight } from "react-icons/fa";
import airport from '../../../../public/servieces img/152965645-airport-buildings-control-tower-runway-and-take-off-modern-aircraft-man-and-woman-with-luggage-go.jpg'


const OurServices = () => {
    return (
        <div className="bg-[#F9F9F9] py-10">
            <p data-aos="fade-up"
     data-aos-duration="2000" className="text-center uppercase text-yellow-400  font-semibold">Services</p>
            <h1 data-aos="fade-up"
     data-aos-duration="2000" className="md:text-5xl text-4xl font-bold text-center mb-5 drop-shadow-md">Our Best Services <span className="text-yellow-400">For You</span></h1>

        <div data-aos="fade-up"
     data-aos-duration="2000" className="md:max-w-7xl lg:flex flex-col md:grid md:grid-cols-2  lg:flex-row justify-center items-center mx-auto gap-5 px-2">

        <div data-aos="fade-up"
     data-aos-duration="2000" className="card bg-base-100 lg:w-96 shadow-xl  ">
  <figure>
    <img className="h-[200px]"
      src="https://img.freepik.com/premium-vector/taxi-app-interface-concept_23-2148497059.jpg?semt=ais_hybridhttps://img.freepik.com/premium-vector/taxi-app-interface-concept_23-2148497059.jpg?semt=ais_hybrid"
      alt="Online Booking" />
    
  </figure>
  
  <div className="card-body ">
  <h2 className="card-title hover:text-yellow-400">Online Booking</h2>
  <p className="-mt-2 text-gray-500">
    Book Your Ride! Ready to get started? Use our easy online booking system to
    schedule your ride in just a few clicks. Select your pickup location,
    destination, date, and time, and we’ll take care of the rest!
  </p>
  <div className="card-actions justify-start">
    <button className="flex items-center hover:gap-1 bg-yellow-400 text-black rounded-2xl px-4 py-2 justify-center font-bold drop-shadow-md cursor-pointer">
      Read More <FaLongArrowAltRight />
    </button>
  </div>
</div>

</div>


        <div data-aos="fade-up"
     data-aos-duration="2000" className="card bg-base-100 lg:w-96 shadow-xl mt-2 ">
  <figure>
    <img className="h-[200px]"
      src="https://cdni.iconscout.com/illustration/premium/thumb/taxi-at-airport-illustration-download-in-svg-png-gif-file-formats--transportation-service-cab-terminal-pack-services-illustrations-9211849.png"
      alt="airpot" />
    
  </figure>
  
  <div className="card-body ">
  <h2 className="card-title hover:text-yellow-400">Airport Transfers</h2>
  <p className="-mt-2 text-gray-500">
  Start your journey stress-free with our reliable airport transfer service. We cover all major airports, providing timely pickups and drop-offs while tracking your flight for any changes.

  </p>
  <div className="card-actions justify-start">
    <button className="flex items-center hover:gap-1 bg-yellow-400 text-black rounded-2xl px-4 py-2 justify-center font-bold drop-shadow-md cursor-pointer">
      Read More <FaLongArrowAltRight />
    </button>
  </div>
</div>

</div>

        <div data-aos="fade-up"
     data-aos-duration="2000" className="card bg-base-100 lg:w-96 shadow-xl mt-2 ">
  <figure>
    <img className="h-[200px]"
      src="https://png.pngtree.com/png-clipart/20230814/original/pngtree-online-taxi-booking-travel-service-flat-design-illustration-via-mobile-app-on-smartphone-take-someone-to-a-destination-suitable-for-background-picture-image_7938061.png"
      alt="Online Booking" />
    
  </figure>
  
  <div className="card-body ">
  <h2 className="card-title hover:text-yellow-400"> Local Rides</h2>
  <p className="-mt-2 text-gray-500">
  Whether you’re heading to the stunning Pembrokeshire Coast National Park or a local event, MD Taxi is your go-to for local transportation. Enjoy the sights without the hassle of parking!

  </p>
  <div className="card-actions justify-start">
    <button className="flex items-center hover:gap-1 bg-yellow-400 text-black rounded-2xl px-4 py-2 justify-center font-bold drop-shadow-md cursor-pointer">
      Read More <FaLongArrowAltRight />
    </button>
  </div>
</div>

</div>

        <div data-aos="fade-up"
     data-aos-duration="2000" className="card bg-base-100 lg:w-96 shadow-xl  mt-2">
  <figure>
    <img className="h-[210px]"
      src="https://static.vecteezy.com/system/resources/previews/007/783/870/non_2x/businessman-booking-cab-from-cab-service-app-vector.jpg"
      alt="special event" />
    
  </figure>
  
  <div className="card-body ">
  <h2 className="card-title hover:text-yellow-400">Special Events</h2>
  <p className="-mt-2 text-gray-500">
  Celebrate your special moments with MD Taxi! From weddings to birthday parties, we provide reliable transportation for you and your guests.
Booking System.

  </p>
  <div className="card-actions justify-start">
    <button className="flex items-center hover:gap-1 bg-yellow-400 text-black rounded-2xl px-4 py-2 justify-center font-bold drop-shadow-md cursor-pointer">
      Read More <FaLongArrowAltRight />
    </button>
  </div>
</div>

</div>




        </div>

   
        </div>
    );
};

export default OurServices;