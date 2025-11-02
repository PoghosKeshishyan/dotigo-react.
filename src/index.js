import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartProvider from './contexts/CartContext';
import { BrowserRouter as Router } from 'react-router-dom';
import './stylesheets/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <Router>
      <App />
    </Router>
  </CartProvider>
);