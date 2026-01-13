// src/components/TotalPrice.js

import React, { useContext } from 'react';
import { TotalPriceContext } from '../context/TotalPriceContext';
import { useLocation } from 'react-router-dom';

function TotalPrice() {
  const { totalPrice, isVisible } = useContext(TotalPriceContext);
  const location = useLocation();

  // Don't show on Home page
  if (location.pathname === '/') {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
      <h4 className="bg-success text-white p-2 rounded">Total Price: R{totalPrice.toFixed(2)}</h4>
    </div>
  );
}

export default TotalPrice;