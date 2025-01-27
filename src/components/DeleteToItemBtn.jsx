import React from "react";
import { useCart } from "../hooks/CartContext";
import styles from "../styles/changeItemCount.module.css";

export const DeleteToItemBtn = ({ id }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    console.log("Dispatching ADD_TO_CART with ID:", id);
    dispatch({ type: "DELETE_ITEM_FROM_CART", payload: id });
  };

  return (
    <button className={styles.delete__btn} onClick={handleAddToCart}>
      -
    </button>
  );
};
