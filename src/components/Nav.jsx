import logo from '../assets/logo.png'
import { useState } from 'react'

import { Link } from 'react-router-dom';
import UseReadingProgress from '../hooks/UseReadingProgress';

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const links = [
        { path: '/', text: 'Home' },
        { path: '/aboutus', text: 'About Us' },
        { path: '/contactus', text: 'Contact Us' },
        { path: '/#', text: 'Services' },
        { path: '/gallary', text: 'Gallary' }
    ];

    const completion = UseReadingProgress();

    const pathname = (window && window.location) ? window.location.pathname : '';

    const inactivea = 'hover:bg-orange-500 hover:text-white bg-gray-200 text-gray-500 w-[100%] md:max-w-[120px]  text-center p-1 rounded-md';
    const activea = "hover:bg-orange-500 hover:text-white bg-orange-500 w-[100%] md:max-w-[120px]  text-center p-1 rounded-md bg-orange-500 text-white text-white text-white";

    function toggleMenu() {
        setOpenMenu(!openMenu)
    }




    return (
        <header className='z-50 py-1 bg-white text-blue-900 w-[100vw] shadow-md fixed top-0'>
            <nav className='flex justify-between items-center w-[92%] mx-auto'>
                <Link to={"/"}>
                    <div className='font-capriola max-h-[60px] font-bold'>
                        <img alt='logo' src={logo} className='max-h-[60px] ' />
                    </div>
                </Link>


                <div className={`absolute md:static duration-1000 bg-white min-h-[100vh] md:min-h-fit  ${openMenu === false ? 'left-[-100%]' : 'left-0'} top-[100%] right-0 w-[100vw] md:w-[60vw] flex justify-center px-5`}>
                    <ul className='flex md:flex-row flex-col w-[80vw] items-center justify-start md:justify-center md:items-center text-[25px] md:text-[18px] md:gap-[1vw] gap-8 pt-20 md:pt-0'>

                        {/* Map the links dynamically */}
                        {links.map((link, index) => (
                            <Link key={index} to={link.path} className='w-[100%]' onClick={toggleMenu}>
                                <div className='overflow-hidden w-[100%] h-[45.5px] md:h-fit relative md:static'>
                                    <li className={`${pathname === link.path ? activea : inactivea} text-nowrap duration-1000 absolute md:static top-0 z- ${openMenu === true ? "top-0" : "top-[100%]"}`}>
                                        {link.text}
                                    </li>
                                </div>
                            </Link>
                        ))}

                    </ul>
                </div>
                <div className='flex items-center gap-6 visible md:hidden'>

                    <div className='md:hidden' onClick={toggleMenu}>
                        {!openMenu && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer md:hidden">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>}
                        {openMenu && <span className='cursor-pointer '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>}
                    </div>


                </div>
            </nav>
            <span style={{ transform: `translateX(${completion - 100}%)` }} className='h-[1px] outline outline-1 outline-orange-500 w-full absolute bottom-0 bg-orange-500' />
        </header>
    )
}

export default Nav

