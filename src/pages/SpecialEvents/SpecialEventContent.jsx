

const SpecialEventContent = () => {
  return (
    <div className=" bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Special Events</h1>
        <p className='md:text-xl my-4 text-gray-700 text-center drop-shadow-md'>
          Make your special occasions unforgettable with our premium transportation services. Whether it's a wedding, corporate event, party, or any special celebration, we ensure a luxurious and hassle-free experience.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-md p-4 text-center">
            <h2 className="text-xl font-semibold">Luxury Rides</h2>
            <p className="text-gray-500">Travel in style with our premium fleet of vehicles.</p>
          </div>

          <div className="card bg-base-100 shadow-md p-4 text-center">
            <h2 className="text-xl font-semibold">Group Transportation</h2>
            <p className="text-gray-500">Seamless travel arrangements for your entire group.</p>
          </div>

          <div className="card bg-base-100 shadow-md p-4 text-center">
            <h2 className="text-xl font-semibold">Customized Packages</h2>
            <p className="text-gray-500">Tailored solutions to fit your event’s needs.</p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a href="tel:+1234567890" className="bg-purple-500 text-white px-6 py-2 rounded-lg shadow-md">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpecialEventContent;
