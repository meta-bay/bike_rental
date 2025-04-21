import React, { createContext, useContext, useState } from 'react';

// Create the context
const BookingsContext = createContext();

// Custom hook to use the context
export const useBookings = () => useContext(BookingsContext);

// Provider component
export const BookingsProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings((prevBookings) => [...prevBookings, booking]);
  };

  return (
    <BookingsContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingsContext.Provider>
  );
};