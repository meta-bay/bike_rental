import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-6 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">BikeRental</h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-500 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/bookings" className="hover:text-yellow-500 transition-colors duration-200">
              Bookings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;