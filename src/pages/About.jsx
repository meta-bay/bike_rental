import React from 'react';

const About = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative container mx-auto p-8 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-6 text-center">
          About Us
        </h1>
        <p className="text-gray-300 text-lg text-center max-w-3xl leading-relaxed">
          We offer all services related to bicycles in Ethiopia, such as rental, trying of rides, maintenance, and promotion.
          Use EthioBike as a transportation option to contribute to reducing carbon dioxide and traffic congestion in your city.
        </p>
        <div className="mt-8">
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;