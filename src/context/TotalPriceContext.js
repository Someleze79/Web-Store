// src/context/TotalPriceContext.js

import React, { createContext, useState } from 'react';

export const TotalPriceContext = createContext();

export function TotalPriceProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const addToTotal = (price) => {
    setTotalPrice((prev) => prev + price);
    setIsVisible(true);
  };

  return (
    <TotalPriceContext.Provider value={{ totalPrice, addToTotal, isVisible }}>
      {children}
    </TotalPriceContext.Provider>
  );
}