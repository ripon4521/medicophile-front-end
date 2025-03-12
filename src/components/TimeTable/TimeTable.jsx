const TimeTable = () => {
    const hours = [
      { day: "Sunday", time: "10:00  - 1:00 " },
      { day: "Monday", time: "16:00  - 1:00 " },
      { day: "Tuesday", time: "16:00  - 1:00" },
      { day: "Wednesday", time: "16:00  - 1:00" },
      { day: "Thursday", time: "16:00  - 1:00" },
      { day: "Friday", time: "16:00  - 1:00" },
      { day: "Saturday", time: "16:00  - 1:00" },
    ];
  
    return (
  <div className="bg-gradient-to-br from-yellow-100 to-yellow-200">
        <div className=" container mx-auto   rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Opening Hours</h2>
        <ul className="divide-y divide-gray-300">
          {hours.map((hour, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-3 px-4 bg-white rounded-lg shadow-sm hover:bg-blue-50 transition"
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
  