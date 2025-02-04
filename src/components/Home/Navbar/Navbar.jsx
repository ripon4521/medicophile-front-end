import React, { useState, useEffect } from 'react';
import logo from '../../../../public/Logo/MD Taxi.png';
import { IoIosArrowDown } from "react-icons/io";
 // Added Chevron Down Icon
import { styles } from '../../../Utils/Style';
import { Link, NavLink } from 'react-router-dom';



const Navbar = ({ active }) => {
  const [shadow, setShadow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

  const handleLinkClick = () => {
    setDropdownOpen(false); // Close the dropdown when a link is clicked
  };

  return (
    <div className="bg-gray-50  shadow md:px-5 lg:px-0 border-b border-gray-400">
      <nav
        className={`items-center hidden md:flex justify-between z-50 sticky top-0 container mx-auto transition-shadow ${
          shadow ? 'shadow-lg' : ''
        }`}
      >
        <Link to="/" className="flex items-center justify-center drop-shadow-md">
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

        <ul className="flex items-center lg:gap-[50px] gap-6 drop-shadow-md">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
              ? 'font-inter text-base px-3 rounded-md text-black py-1 drop-shadow-md relative font-bold bg-yellow-400 '
              : 'font-inter text-base hover:text-yellow-700 font-bold relative group'
              }
            >
              <a>Home</a>
            </NavLink>
          </li>

          {/* Services Dropdown */}
          <li className="relative">
            <div
              className="font-inter text-base flex items-center gap-1 cursor-pointer font-bold"
              onClick={handleDropdownClick}
            >
              <span>Services</span>
              <IoIosArrowDown className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            {dropdownOpen && (
              <ul className="absolute top-full left-0 bg-white shadow-lg mt-2 w-52 py-2 rounded">
                <li className='drop-shadow-md'>
                  <NavLink
                    to="/service1"
                     className="block px-4 py-2 text-black  hover:bg-yellow-400 hover:text-black rounded-md font-bold drop-shadow-md"
                    onClick={handleLinkClick}
                  >
                 Airport Transfers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service2"
                      className="block px-4 py-2 text-black  hover:bg-yellow-400 hover:text-black rounded-md font-bold drop-shadow-md"
                    onClick={handleLinkClick}
                  >
                  Local RidesWhether
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service3"
                    className="block px-4 py-2 text-black  hover:bg-yellow-400 hover:text-black rounded-md font-bold drop-shadow-md"
                    onClick={handleLinkClick}
                  >
                Special Events
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'font-inter text-base px-3 rounded text-yellow-700 relative'
                  : 'font-inter text-base hover:text-yellow-700 font-bold relative group'
              }
            >
              <a>About Us</a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-700 transition-all group-hover:w-full mt-1"></span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'font-inter text-base px-3 rounded text-yellow-700 relative'
                  : 'font-inter text-base hover:text-yellow-700 font-bold relative group'
              }
            >
              <a>Contact Us</a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#DF9D00] transition-all group-hover:w-full mt-1"></span>
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-[20px] drop-shadow-md">
          {/* <CiSearch className="text-[1.5rem] cursor-pointer" /> */}
          <button className="py-2.5 cursor-pointer px-6 border border-yellow-400 text-black rounded-tr-[30px] rounded-bl-[30px] hover:bg-yellow-400 hover:text-black font-bold transition-all duration-200">
            Book Now
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
