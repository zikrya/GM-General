import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    const [bgColor, setBgColor] = useState("bg-transparent");

    useEffect(() => {
        setBgColor("bg-transparent");
    }, [location]);

    return (
        <header className={`py-5 ${bgColor} fixed w-full z-50`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="relative flex justify-between items-center">
                    <NavLink to="/" data-testid="home" className="text-2xl font-semibold text-white whitespace-nowrap">GM General</NavLink>
                    <div className="hidden md:flex items-center gap-x-8">
                        <NavLink to="/about" data-testid="about" activeClassName="text-opacity-100" className="text-lg text-white text-opacity-70 hover:text-opacity-100 whitespace-nowrap">About</NavLink>
                        <NavLink to="/contact" data-testid="contact" activeClassName="text-opacity-100" className="text-lg text-white text-opacity-70 hover:text-opacity-100 whitespace-nowrap">Contact</NavLink>
                    </div>
                    {/* Placeholder for mobile navigation icon */}
                    <div className="-mr-1 md:hidden" data-testid="mobileNavigation">
                        {/* Mobile navigation items */}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;




