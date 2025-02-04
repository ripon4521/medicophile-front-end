

const AnimatedButton = () => {

    return (
        <button
            className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-mono tracking-tighter text-black bg-yellow-400 rounded-lg group">
                  <span
                      className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span
                className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-300"></span>
            <span className="relative text-text group-hover:text-white">Book Now</span>
        </button>
    );
};

export default AnimatedButton;
              