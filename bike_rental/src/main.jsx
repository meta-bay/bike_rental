import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BookingsProvider } from './context/BookingsContext'; // Import the provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookingsProvider>
      <App />
    </BookingsProvider>
  </StrictMode>
);