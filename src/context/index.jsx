import React, { createContext, useState } from "react";
const FoodContext = createContext();

export function FoodContextProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const values = { foods, setFoods };
  return <FoodContext.Provider value={values}>{children}</FoodContext.Provider>;
}

export default FoodContext;
