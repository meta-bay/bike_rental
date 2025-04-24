import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bikerental.jpg'; // Import the logo

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto p-8 flex flex-col items-center justify-center h-full">
          <img src={logo} alt="Bike Rental Logo" className="h-20 w-20 mb-6" />
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 text-center">
            Welcome to Bike Rental
          </h1>
          <p className="text-gray-300 text-lg text-center max-w-3xl leading-relaxed">
            Your one-stop solution for bike rentals, maintenance, and eco-friendly transportation in Ethiopia.
          </p>
          <div className="mt-8">
            <Link to="/home">
              <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
                Book a Bike
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">About Us</h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          We offer all services related to bicycles in Ethiopia, such as rental, trying of rides, maintenance, and promotion.
          Use EthioBike as a transportation option to contribute to reducing carbon dioxide and traffic congestion in your city.
        </p>
        <div className="mt-8">
          <Link to="/about">
            <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;