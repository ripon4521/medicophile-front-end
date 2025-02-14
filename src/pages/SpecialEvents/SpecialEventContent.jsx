import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SpecialEventContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4" data-aos="zoom-in">
          Special Events
        </h1>
        <p className="md:text-xl my-4 text-gray-700 text-center drop-shadow-md" data-aos="fade-up">
          Make your special occasions unforgettable with our premium transportation services. Whether it's a wedding, corporate event, party, or any special celebration, we ensure a luxurious and hassle-free experience.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg text-center" data-aos="fade-right">
            <h2 className="text-xl font-semibold text-purple-600">Luxury Rides</h2>
            <p className="text-gray-500 mt-2">Travel in style with our premium fleet of vehicles.</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg text-center" data-aos="fade-up">
            <h2 className="text-xl font-semibold text-purple-600">Group Transportation</h2>
            <p className="text-gray-500 mt-2">Seamless travel arrangements for your entire group.</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg text-center" data-aos="fade-left">
            <h2 className="text-xl font-semibold text-purple-600">Customized Packages</h2>
            <p className="text-gray-500 mt-2">Tailored solutions to fit your event’s needs.</p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a href="tel:+1234567890" className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105" data-aos="zoom-in">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpecialEventContent;
