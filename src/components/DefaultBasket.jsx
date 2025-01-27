import { Link } from "react-router-dom";
import styles from "../styles/DefaoultBasket.module.css";

export const DefaultBasket = () => {
  return (
    <div className={styles.container}>
      <h3>Your cart is empty! Click below to start shopping.</h3>
      <Link className={styles.link} to="/">
        SHOP NOW
      </Link>
    </div>
  );
};
