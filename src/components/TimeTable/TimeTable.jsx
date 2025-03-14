import logo from "../../../public/Logo/MD Taxi.png"; // Logo import
import { Link } from "react-router-dom";

const TimeTable = () => {
  const hours = [
    { day: "Sunday", time: "10:00  - 1:00 " },
    { day: "Monday", time: "16:00  - 1:00 " },
    { day: "Tuesday", time: "16:00  - 1:00" },
    { day: "Wednesday", time: "16:00  - 1:00" },
    { day: "Thursday", time: "16:00  - 1:00" },
    { day: "Friday", time: "16:00  - 4:00" },
    { day: "Saturday", time: "16:00  - 4:00" },
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 flex flex-col items-center justify-center p-6">
      <div className="shadow-xl rounded-2xl p-8 container mx-auto ">
        <div className="flex flex-col items-center mb-6">
             <Link to="/" className="flex items-center">
                    <span
                      style={{ fontFamily: 'Rancho, serif' }}
                      className="text-2xl text-yellow-600 font-extrabold drop-shadow-md"
                    >
                      MD
                    </span>
                    <img src={logo} alt="logo" className="w-20 h-16" />
                    <h1 style={{ fontFamily: 'Rancho, serif' }} className="text-3xl font-bold drop-shadow-md">
                      Taxi
                    </h1>
                  </Link>
         
          <h2 className="text-3xl font-bold text-gray-800">Opening Hours</h2>
        </div>
        <ul className="divide-y divide-gray-300">
          {hours.map((hour, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg shadow-sm hover:bg-yellow-100 transition"
            >
              <span className="text-lg font-medium text-gray-700">{hour.day}</span>
              <span className="text-lg text-gray-600">{hour.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimeTable;