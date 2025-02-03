import React, { useState, useEffect } from 'react';
import logo from '../../../../public/Logo/MD Taxi.png'

// react icons
import { CiSearch } from "react-icons/ci";

// utils
import { styles } from "../../../Utils/Style";

// react router dom
import { Link } from "react-router-dom";

const Navbar = ({active}) => {
    const [shadow, setShadow] = useState(false);

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

    return (
        <nav className={`items-center hidden lg:flex justify-between z-50 px-12 py-4 sticky top-0 bg  transition-shadow ${shadow ? 'shadow-lg' : ''}`}>
            <Link to='/'>
                <img src={logo} alt="logo" className='w-[100px] '/>
            </Link>
            <ul className='flex items-center gap-[50px]'>
                <li className={`${active === 1 ? 'text-primary font-[600]' : ''} navItem`}>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li className={`${active === 2 ? 'text-primary font-[600]' : ''} navItem`}>
                    <Link to='/about'>
                        About Us
                    </Link>
                </li>
                <li className={`${active === 3 ? 'text-primary font-[600]' : ''} navItem`}>
                    <Link to='/services'>
                        Our Services
                    </Link>
                </li>
                <li className={`${active === 4 ? 'text-primary font-[600]' : ''} navItem`}>
                    <Link to='/contact'>
                        Contact Us
                    </Link>
                </li>
            </ul>

            <div className='flex items-center gap-[20px]'>
                <CiSearch className='text-[1.5rem] cursor-pointer' />
                <button className={`${styles.buttonPrimary}`}>Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;