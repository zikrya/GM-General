import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    const [navStyle, setNavStyle] = useState("bg-transparent text-white");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Update the NavBar style based on the current page
        if (location.pathname === '/contact-us' || '/about-us') { // Replace '/your-page-path' with your specific page path
            setNavStyle("bg-transparent text-gray-800"); // Black font color for specific page
        } else {
            setNavStyle("bg-transparent text-white"); // Default style for other pages
        }
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${navStyle} py-5 fixed w-full z-50 transition-colors duration-300`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="relative flex justify-between items-center">
                    <NavLink to="/" className="text-2xl font-semibold whitespace-nowrap">GM General</NavLink>

                    {/* Hamburger Icon for Mobile */}
                    <div className="md:hidden" onClick={toggleMenu}>
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </div>

                    {/* Links for Desktop */}
                    <div className="hidden md:flex items-center gap-x-8">
                        <NavLink to="/about-us" activeClassName="text-opacity-100" className="text-lg text-opacity-70 hover:text-opacity-100 whitespace-nowrap">About</NavLink>
                        <NavLink to="/contact-us" activeClassName="text-opacity-100" className="text-lg text-opacity-70 hover:text-opacity-100 whitespace-nowrap">Contact</NavLink>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`absolute top-full right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <NavLink to="/about-us" activeClassName="text-opacity-100" className="block py-2 px-4 text-sm hover:bg-gray-100">About</NavLink>
                        <NavLink to="/contact-us" activeClassName="text-opacity-100" className="block py-2 px-4 text-sm hover:bg-gray-100">Contact</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;






