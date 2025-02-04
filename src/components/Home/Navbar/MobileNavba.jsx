import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import logo from '../../../../public/Logo/MD Taxi.png';
import { IoIosArrowDown } from 'react-icons/io';

const MobileNavbar = ({ active }) => {
  const [shadow, setShadow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('sidebar');
      if (sidebar && !sidebar.contains(event.target) && !event.target.closest('.menu-icon')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
    <>
      <div className=" shadow">
        <nav
          className={`items-center flex md:hidden justify-between z-50 px-6  sticky top-0 transition-shadow ${
            shadow ? 'shadow-lg' : ''
          }`}
        >
         <Link to="/" className="flex items-center justify-center">
                <span
                  style={{ fontFamily: 'Rancho, serif' }}
                  className="md:text-2xl text-xl text-blue-400 font-extrabold drop-shadow-md"
                >
                  MD
                </span>
                <img src={logo} alt="logo" className="md:w-20 md:h-16 w-16 h-14" />
                <h1 style={{ fontFamily: 'Rancho, serif' }} className="md:text-3xl text-2xl font-bold drop-shadow-md">
                  Taxi
                </h1>
              </Link>

          <div className="flex items-center gap-[16px]">
          
            <AiOutlineMenu
              onClick={() => setIsSidebarOpen(true)}
              className="text-[1.6rem] text-gray-600 menu-icon"
            />
          </div>
        </nav>

        <aside
          id="sidebar"
          className={`${
            isSidebarOpen ? 'translate-x-0 opacity-100 z-[999]' : 'translate-x-[300px] opacity-0 z-[-1]'
          } w-[80%] md:w-[50%] h-screen overflow-y-auto p-[20px] fixed top-0 right-0 transition-all duration-300`}
        >
          <div className="bg-white shadow rounded-md md:-mt-5 -mr-5 -mt-5 lg:hidden block">
            <RxCross1
              onClick={() => setIsSidebarOpen(false)}
              className="text-[2rem] text-gray-700 mt-5  p-[5px] float-right hover:bg-gray-100 rounded-full"
            />
            <ul className="flex flex-col gap-[30px] py-5  ml-6">
              <li className={`${active === 1 ? 'text-primary font-[600]' : ''} navItem`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`${active === 2 ? 'text-primary font-[600]' : ''} navItem`}>
                <Link to="/about">About Us</Link>
              </li>
                {/* Services Dropdown */}
                      <li className="relative">
                        <div
                          className="font-inter text-base flex items-center gap-1 cursor-pointer"
                          onClick={handleDropdownClick}
                        >
                          <span>Services</span>
                          <IoIosArrowDown className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
            
                        {dropdownOpen && (
                          <ul className="absolute top-full left-0 bg-white shadow-lg mt-2 w-52 py-2 rounded">
                            <li>
                              <NavLink
                                to="/service1"
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                                onClick={handleLinkClick}
                              >
                             Airport Transfers
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/service2"
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                                onClick={handleLinkClick}
                              >
                              Local RidesWhether
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/service3"
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                                onClick={handleLinkClick}
                              >
                            Special Events
                              </NavLink>
                            </li>
                          </ul>
                        )}
                      </li>
              <li className={`${active === 4 ? 'text-primary font-[600]' : ''} navItem`}>
                <Link to="/contact">Contact Us</Link>
              </li>
              <div className="flex items-center gap-[20px]">
                {/* <CiSearch className='text-[1.5rem] cursor-pointer' /> */}
                <button className="py-2.5 px-6 border border-yellow-400 text-black rounded-tr-[30px] rounded-bl-[30px] hover:bg-yellow-400 hover:text-black font-bold transition-all duration-200">
          Book Now
        </button>
              </div>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default MobileNavbar;
