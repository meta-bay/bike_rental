import React from 'react';
import { useBookings } from '../context/BookingsContext'; // Import the context

const Bookings = () => {
  const { bookings } = useBookings(); // Access the bookings

  return (
    <div className="container mx-auto p-8 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8 text-center">Your Bookings</h1>
      {bookings.length === 0 ? (
        <p className="text-gray-300 text-lg text-center">No bookings yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl p-4 bg-gray-800 shadow-lg"
            >
              <h2 className="text-xl font-semibold text-yellow-400">{booking.bike.name}</h2>
              <p className="text-gray-300">Start Time: {booking.startTime}</p>
              <p className="text-gray-300">Duration: {booking.duration} hour(s)</p>
              <p className="text-gray-300">Price: ${booking.bike.price}/hour</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;