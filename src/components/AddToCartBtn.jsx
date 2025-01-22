import React from "react";
import { useCart } from "../hooks/CartContext";

export const AddToCartBtn = ({ id }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    console.log("Dispatching ADD_TO_CART with ID:", id);
    dispatch({ type: "ADD_TO_CART", payload: id });
  };

  return <button onClick={handleAddToCart}>ADD TO CART</button>;
};
