import React, { useState, useEffect } from 'react';
import logo from '../../../../public/Logo/MD Taxi.png';
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownClick = () => setDropdownOpen(!dropdownOpen);
  const handleLinkClick = () => setDropdownOpen(false);

  return (
    <div className="bg-gray-50 shadow fixed w-full z-50 top-0  hidden md:block">
      <nav className={`container mx-auto flex items-center justify-between  px-6 transition-shadow ${shadow ? '' : ''}`}>
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

        <ul className="flex items-center lg:gap-[50px] gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'font-inter text-base px-3 py-1 bg-yellow-400 rounded-md font-bold'
                  : 'font-inter text-base hover:text-yellow-700 font-bold'
              }
            >
              Home
            </NavLink>
          </li>

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
                <li>
                  <NavLink
                    to="/airport-Transfer"
                    className={({ isActive }) =>
                      isActive
                        ? 'font-inter text-base px-8 ml-1 py-1 bg-yellow-400 rounded-md font-bold'
                        : 'font-inter text-base hover:text-yellow-500 font-bold ml-4'
                    }
                    onClick={handleLinkClick}
                  >
                    Airport Transfers
                  </NavLink>
                </li>
                <li className='my-4'>
                  <NavLink
                    to="/local-rides"
                    className={({ isActive }) =>
                      isActive
                        ? 'font-inter text-base px-8 ml-1 py-1 bg-yellow-400 rounded-md font-bold '
                        : 'font-inter text-base hover:text-yellow-500 font-bold ml-4 '
                    }
                    onClick={handleLinkClick}
                  >
                  Local Rides
                  </NavLink>
                </li>
                <li className='my-4'>
                  <NavLink
                    to="/special-events"
                    className={({ isActive }) =>
                      isActive
                        ? 'font-inter text-base px-8 ml-1 py-1 bg-yellow-400 rounded-md font-bold '
                        : 'font-inter text-base hover:text-yellow-500 font-bold ml-4 '
                    }
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
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? 'font-inter text-base px-3 py-1 bg-yellow-400 rounded-md font-bold'
                  : 'font-inter text-base hover:text-yellow-700 font-bold'
              }
            >
      About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? 'font-inter text-base px-3 py-1 bg-yellow-400 rounded-md font-bold'
                  : 'font-inter text-base hover:text-yellow-700 font-bold'
              }
            >
      Contact Us
            </NavLink>
          </li>


        </ul>

        <a href="tel:+4407783664574">
  <button className="py-2.5 px-6 border border-yellow-400 text-black rounded-tr-[30px] rounded-bl-[30px] hover:bg-yellow-400 hover:text-black font-bold transition-all duration-200">
    Book Now
  </button>
</a>

      </nav>
    </div>
  );
};

export default Navbar;
