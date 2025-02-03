import React from "react";
import { useCart } from "../hooks/CartContext";
import styles from "../styles/addBtn.module.css";

export const AddToCartBtn = ({ id, text = "ADD TO CART", className = "card__add_btn" }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    console.log("Dispatching ADD_TO_CART with ID:", id);
    dispatch({ type: "ADD_TO_CART", payload: id });
  };

  return (
    <button className={`${styles[className]}`} onClick={handleAddToCart}>
      {text}
    </button>
  );
};
