import React, { useState } from 'react';
import { useBookings } from '../context/BookingsContext'; // Import the context

const BookingForm = ({ bike, onClose }) => {
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState(1);
  const { addBooking } = useBookings(); // Access the addBooking function

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {
      bike,
      startTime,
      duration,
    };
    addBooking(booking); // Save the booking
    alert(`Booked ${bike.name} for ${duration} hour(s) starting at ${startTime}`);
    onClose();
  };

  return (
    <div className="modal-overlay flex items-center justify-center p-4 sm:p-8">
      <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl max-w-full sm:max-w-md w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 sm:mb-6">
          Book {bike.name}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-300 font-medium mb-2">Start Time</label>
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full border border-gray-600 bg-gray-700 text-white p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-300 font-medium mb-2">Duration (hours)</label>
            <input
              type="number"
              min="1"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full border border-gray-600 bg-gray-700 text-white p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;