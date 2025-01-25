import React from "react";
import { useCart } from "../hooks/CartContext";

export const RemoveToCardBtn = ({ id }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    console.log("Dispatching ADD_TO_CART with ID:", id);
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return <button onClick={handleAddToCart}>DELETET</button>;
};
