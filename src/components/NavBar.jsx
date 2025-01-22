import { BasketIcon } from "./BasketIcon";
import styles from "../styles/navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__inner}>
        <ul className={styles.navbar__list}>
          <li>shop</li>
          <li>abot us</li>
        </ul>
        <h1>LOGO</h1>
        <ul className={styles.navbar__list}>
          <li>search</li>
          <BasketIcon url={"https://fakestoreapi.com/carts"} />
        </ul>
      </div>
    </div>
  );
};
