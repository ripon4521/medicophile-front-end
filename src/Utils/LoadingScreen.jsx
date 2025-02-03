
import logo from '../../public/Logo/MD Taxi.png';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

const LoadingScreen = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true); // Show text after the logo animation completes
    }, 2000); // Delay for 1 second after logo animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="flex items-center justify-center flex-col relative">
        
        {/* Logo with Animation */}
        <img 
          src={logo} 
          alt="MD Taxi Logo" 
          className="md:w-[500px] animate-[moveCar_1s_ease-in-out_forwards] w-40" 
        />
        
        {/* Conditionally Render Text after Logo Animation */}
        {/* {showText && (
          <div className=" text-yellow-500 flex items-center flex-col justify-center h-screen text-center  -mt-[500px] font-extrabold text-5xl  drop-shadow-lg animate-[fadeInText_2s_ease-in-out]">
             <img 
          src={logo} 
          alt="MD Taxi Logo" 
          className="" 
        />
         <Typewriter
  options={{
    strings: ['Welcome to the MD Taxi'],
    autoStart: true,
    loop: true,
    delay:20,
  }}
/>
           
          </div>
        )} */}
      </div>
    </div>
  );
};

export default LoadingScreen;
