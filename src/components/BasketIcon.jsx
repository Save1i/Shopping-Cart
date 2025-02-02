import { useCart } from "../hooks/CartContext";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styles from "../styles/basketIcon.module.css";

export const BasketIcon = () => {
  const { state } = useCart();
  console.log(Object.values(state.items));
  const arr = Object.values(state.items);
  let sumArr = null;
  if (arr.length > 0) {
    sumArr = arr.reduce((acc, item) => acc + item);
  }

  return (
    <>
      <Link to="/cart" className={styles.basket__link}>
        <RiShoppingBagLine className={styles.basket__icon} />

        <span className={styles.basket__items}>{sumArr}</span>
      </Link>
    </>
  );
};
