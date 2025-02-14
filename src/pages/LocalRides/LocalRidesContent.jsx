

const LocalRidesContent = () => {
  return (
    <div className=" bg-gray-100 flex flex-col items-center p-6 ">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Local Rides</h1>
        <p className="text-center text-gray-600 mt-2">
          Reliable and affordable local taxi services for your everyday travel needs.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-md p-4 text-center">
            <h2 className="text-xl font-semibold">Fast Pickup</h2>
            <p className="text-gray-500">Get picked up in minutes anywhere in your city.</p>
          </div>

          <div className="card bg-base-100 shadow-md p-4 text-center">
            <h2 className="text-xl font-semibold">Affordable Rates</h2>
            <p className="text-gray-500">Enjoy budget-friendly fares with no hidden costs.</p>
          </div>

          <div className="card bg-base-100 shadow-md p-4 text-center">
            <h2 className="text-xl font-semibold">Safe & Secure</h2>
            <p className="text-gray-500">Your safety is our priority with verified drivers.</p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button className="text-white bg-purple-500 cursor-pointer px-6 py-2 rounded-lg shadow-md">
            Book a Ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocalRidesContent;
