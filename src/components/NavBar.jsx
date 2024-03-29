import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    const [desktopNavStyle, setDesktopNavStyle] = useState("text-white");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (location.pathname === '/contact-us' || location.pathname === '/about-us') {
            setDesktopNavStyle("text-gray-800");
        } else {
            setDesktopNavStyle("text-white");
        }
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-transparent py-5 fixed w-full z-50 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="relative flex justify-between items-center">
                    <NavLink to="/" className={`text-2xl font-semibold whitespace-nowrap ${desktopNavStyle}`}>GM General</NavLink>

                    {/* Hamburger Icon for Mobile */}
                    <div className="md:hidden" onClick={toggleMenu}>
                        <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </div>

                    {/* Links for Desktop */}
                    <div className={`hidden md:flex items-center gap-x-8 ${desktopNavStyle}`}>
                        <NavLink to="/about-us" activeClassName="text-opacity-100" className="text-lg text-opacity-70 hover:text-opacity-100 whitespace-nowrap">About</NavLink>
                        <NavLink to="/contact-us" activeClassName="text-opacity-100" className="text-lg text-opacity-70 hover:text-opacity-100 whitespace-nowrap">Contact</NavLink>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`absolute top-full right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <NavLink to="/about-us" activeClassName="text-opacity-100" className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100">About</NavLink>
                        <NavLink to="/contact-us" activeClassName="text-opacity-100" className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100">Contact</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;






