import React from 'react';

const BikeCard = ({ bike, onBook }) => {
  return (
    <div className="border rounded-xl p-6 bg-white shadow-lg card-hover">
      <img
        src={bike.image}
        alt={bike.name}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-semibold text-gray-800">{bike.name}</h2>
      <p className="text-gray-500 text-lg">${bike.price}/hour</p>
      <button onClick={() => onBook(bike)} className="btn-primary mt-4 w-full">
        Book Now
      </button>
    </div>
  );
};

export default BikeCard;