import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUsCoontent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-center text-gray-800" data-aos="zoom-in">About Us</h1>
        <p className='md:text-lg my-4 text-gray-700 text-center drop-shadow-md' data-aos="fade-up">
          Welcome to MD Taxi – your trusted transportation partner. We are committed to providing safe, reliable, and affordable rides across London. Our mission is to make every journey comfortable and stress-free.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="card bg-base-100 shadow-md p-6 text-center" data-aos="fade-right">
          <h2 className="text-xl font-semibold">Reliable Service</h2>
          <p className="text-gray-500">Available 24/7 to get you to your destination safely.</p>
        </div>

        <div className="card bg-base-100 shadow-md p-6 text-center" data-aos="fade-up">
          <h2 className="text-xl font-semibold">Experienced Drivers</h2>
          <p className="text-gray-500">Professional and courteous drivers ensuring a smooth ride.</p>
        </div>

        <div className="card bg-base-100 shadow-md p-6 text-center" data-aos="fade-left">
          <h2 className="text-xl font-semibold">Affordable Pricing</h2>
          <p className="text-gray-500">Competitive rates with no hidden fees.</p>
        </div>
      </div>

      <div className="mt-6 flex justify-center" data-aos="zoom-in">
        <a href="tel:+1234567890" className="btn btn-primary text-white px-6 py-2 rounded-lg shadow-md">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutUsCoontent;
