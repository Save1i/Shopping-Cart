import React from "react";
import { useCart } from "../hooks/CartContext";

export const DeleteToItemBtn = ({ id }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    console.log("Dispatching ADD_TO_CART with ID:", id);
    dispatch({ type: "DELETE_ITEM_FROM_CART", payload: id });
  };

  return <button onClick={handleAddToCart}>-</button>;
};
