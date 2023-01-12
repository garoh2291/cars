import React, { useState } from "react";
import { CarContext } from "..";

export const CarContextProvider = ({ children }) => {
  const [delivery, setDelivery] = useState({
    price: 0,
    selectedAuction: "",
    selectedPlace: "",
    deliveryPrice: "",
  });

  return (
    <CarContext.Provider value={{ delivery, setDelivery }}>
      {children}
    </CarContext.Provider>
  );
};
