import  {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {CiSearch} from "react-icons/ci";
import {styles} from "../../../Utils/Style";
import {AiOutlineMenu} from "react-icons/ai";
import {RxCross1, RxCross2} from "react-icons/rx";

const MobileNavbar = ({active}) => {

    const [shadow, setShadow] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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
        <>
            <nav
                className={`items-center  flex lg:hidden justify-between z-50 px-6 py-5 sticky top-0 bg-black transition-shadow ${shadow ? 'shadow-lg' : ''}`}>

                <Link to='/'>
                    <img src="/logo.png" alt="logo" className='w-[90px]'/>
                </Link>

                <div className='flex items-center gap-[16px]'>
                    <CiSearch className='text-[1.5rem] cursor-pointer text-gray-600'/>
                    <AiOutlineMenu onClick={() => setIsSidebarOpen(true)} className='text-[1.6rem] text-gray-600'/>
                </div>

            </nav>

            <aside
                className={`${isSidebarOpen ? 'translate-x-0 opacity-100 z-[999]' : 'translate-x-[300px] opacity-0 z-[-1]'} w-[80%] md:w-[50%] h-screen overflow-y-auto  p-[20px] fixed top-0 right-0 transition-all duration-300`}>

                <RxCross2 onClick={() => setIsSidebarOpen(false)}
                          className='text-[2rem] text-gray-700 p-[5px] float-right hover:bg-gray-100 rounded-full'/>

                <div>
                    <ul className='flex flex-col gap-[30px] mt-16 ml-6'>
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
                        <button className={`${styles.buttonPrimary} w-max`}>Get Started</button>
                    </ul>

                </div>

            </aside>
        </>
    );
};

export default MobileNavbar;