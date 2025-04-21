import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-700 p-4 sm:p-6 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-tight">
          <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">
            Bike<span className="text-yellow-400">Rental</span>
          </Link>
        </h1>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-lg mt-4 sm:mt-0`}
        >
          <li>
            <Link
              to="/bookings"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Bookings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;