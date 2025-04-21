import React, { useState } from 'react';
import BikeCard from '../components/BikeCard';
import BookingForm from '../components/BookingForm';

const bikes = [
  {
    id: 1,
    name: 'Mountain Bike',
    price: 10,
    image:
      'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'City Bike',
    price: 8,
    image:
      'https://images.unsplash.com/photo-1670528148728-7ac7f5dc1123?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Electric Bike',
    price: 15,
    image:
      'https://images.unsplash.com/photo-1618987688327-dc0b28888fe4?q=80&w=1803&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Home = () => {
  const [selectedBike, setSelectedBike] = useState(null);

  const handleBook = (bike) => {
    setSelectedBike(bike);
  };

  const handleClose = () => {
    setSelectedBike(null);
  };

  return (
    <div className="container mx-auto p-8 min-h-screen">
      <h1 className="text-4xl font-bold text-grey-300 mb-8 text-center">Available Bikes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} onBook={handleBook} />
        ))}
      </div>
      {selectedBike && <BookingForm bike={selectedBike} onClose={handleClose} />}
    </div>
  );
};

export default Home;