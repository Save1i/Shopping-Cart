import React from "react";
import { useCart } from "../hooks/CartContext";
import { ImBin } from "react-icons/im";
import styles from "../styles/changeItemCount.module.css";

export const RemoveToCardBtn = ({ id }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    console.log("Dispatching ADD_TO_CART with ID:", id);
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <button className={styles.delete__item} onClick={handleAddToCart}>
      <ImBin className={styles.delete__icon} />
    </button>
  );
};
