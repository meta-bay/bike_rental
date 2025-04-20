import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<div className="container mx-auto p-8 text-gray-800">Bookings Page (TBD)</div>} />
      </Routes>
    </Router>
  );
};

export default App;