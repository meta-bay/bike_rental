import React from 'react';

const BikeCard = ({ bike, onBook }) => {
  return (
    <div className="border border-gray-700 rounded-xl p-4 sm:p-6 bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        src={bike.image}
        alt={bike.name}
        className="w-full h-40 sm:h-56 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400">{bike.name}</h2>
      <p className="text-gray-300 text-base sm:text-lg">${bike.price}/hour</p>
      <button
        onClick={() => onBook(bike)}
        className="mt-4 w-full bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg transition-colors duration-300"
      >
        Book Now
      </button>
    </div>
  );
};

export default BikeCard;