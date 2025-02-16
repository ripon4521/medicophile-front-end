import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { FaLongArrowAltRight } from "react-icons/fa";
import Swal from "sweetalert2";

const BookingFrom = () => {
    const [formData, setFormData] = useState({
        pickupLocation: "",
        dropoffLocation: "",
        passengers: "",
        pickupDate: "",
        pickupTime: "",
        phoneNumber: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit =async (e) => {
        e.preventDefault();
        console.log("Booking Details:", formData);
        
            if (!formData.pickupLocation || !formData.dropoffLocation || !formData.passengers || !formData.pickupDate || !formData.pickupTime || !formData.phoneNumber) {
              alert("Please fill in all fields!");
              return;
            }
        
            const response = await fetch("https://formspree.io/f/mrbeyneg", { // Replace with your actual Formspree ID
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            });
        
            if (response.ok) {
                Swal.fire({
                    title: "Your Booking  SuccessFull!",
                    icon: "success",
                    draggable: true
                  });
              setFormData({ pickupLocation: '', dropoffLocation: '', passengers: '' , pickupDate:'', pickupTime:'', phoneNumber: ''});
            } else {
              alert("Error sending message. Please try again.");
            }

        // alert("Booking Submitted! Check console for details.");
    };

    return (
        <div data-aos="fade-up" data-aos-duration="2000" className="bg-white shadow lg:max-w-4xl md:max-w-2xl mx-auto px-5 py-5 lg:-mt-32 md:-mt-10 z-90 opacity-90 rounded-2xl ">
            <h2 className="text-center text-2xl font-bold drop-shadow-md mb-3">Book Your Ride</h2>
            <hr />
            <form onSubmit={handleSubmit} className="flex flex-col mt-4 gap-5">
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-[80%] relative">
                        <span>Pick Up Location</span>
                        <IoLocationOutline className="absolute mt-4 left-3 text-[1.5rem] text-[#777777]" />
                        <input
                            type="text"
                            name="pickupLocation"
                            placeholder="Type Location"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            className="peer mt-1 border-border border border-gray-300 rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-yellow-400 transition-colors duration-300"
                        />
                    </div>

                    <div className="w-full md:w-[80%] relative">
                        <span>Drop Off Location</span>
                        <IoLocationOutline className="absolute mt-4 left-3 text-[1.5rem] text-[#777777]" />
                        <input
                            type="text"
                            name="dropoffLocation"
                            placeholder="Type Location"
                            value={formData.dropoffLocation}
                            onChange={handleChange}
                            className="peer mt-1 border-border border border-gray-300 rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-yellow-400 transition-colors duration-300"
                        />
                    </div>

                    <div className="w-full md:w-[80%] relative">
                        <span>Passengers</span>
                        <GrUserManager className="absolute mt-[18px] left-3 text-[1.2rem] text-[#777777]" />
                        <input
                            type="number"
                            name="passengers"
                            placeholder="Passengers"
                            value={formData.passengers}
                            onChange={handleChange}
                            className="peer mt-1 border-border border border-gray-300 rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-yellow-400 transition-colors duration-300"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-[80%] relative">
                        <span>Pick Up Date</span>
                        <input
                            type="date"
                            name="pickupDate"
                            value={formData.pickupDate}
                            onChange={handleChange}
                            className="peer mt-1 border-border border border-gray-300 rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-yellow-400 transition-colors duration-300"
                        />
                    </div>

                    <div className="w-full md:w-[80%] relative">
                        <span>Pick Up Time</span>
                        <input
                            type="time"
                            name="pickupTime"
                            value={formData.pickupTime}
                            onChange={handleChange}
                            className="peer mt-1 border-border border border-gray-300 rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-yellow-400 transition-colors duration-300"
                        />
                    </div>

                    {/* Phone Number input */}
                    <div className="w-full md:w-[80%] relative">
                        <span>Phone Number</span>
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="e.g., 1XXXXXXXXX"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="peer mt-1 border-border border border-gray-300 rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-yellow-400 transition-colors duration-300"
                        />
                    </div>
                </div>

                {/* Book Taxi Button */}
                <div className="flex justify-center">
                    <button type="submit" className="flex items-center hover:gap-2 bg-yellow-400 text-black rounded-2xl px-4 justify-center w-full md:w-[80%] h-14 mt-3 font-bold drop-shadow-md text-xl cursor-pointer ">
                        Book Taxi <FaLongArrowAltRight className="" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingFrom;
