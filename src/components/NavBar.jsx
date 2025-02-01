import { BasketIcon } from "./BasketIcon";
import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__inner}>
        <ul className={styles.navbar__list}>
          <li>
            <Link className={styles.navbar__link} to="/">
              shop
            </Link>
          </li>
          <li>about us</li>
        </ul>
        <h1 className={styles.navbar__logo}>
          <Link className={styles.navbar__link} to="/">
            Participle+
          </Link>
        </h1>
        <ul className={styles.navbar__list}>
          <li>search</li>
          <BasketIcon url={"https://dummyjson.com/products"} />
        </ul>
      </div>
    </div>
  );
};
