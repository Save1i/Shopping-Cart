import { BasketIcon } from "./BasketIcon";
import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cart = {
    display: isOpen ? "none" : "block",
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__inner}>
        <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
          <RxHamburgerMenu className={styles.burger__icon} />
        </button>
        <ul className={`${styles.burger__list} ${isOpen ? styles.burger__list_open : ""}`}>
          <li>
            <Link className={styles.navbar__link} to="/">
              shop
            </Link>
          </li>
          <li>about us</li>
          <li>search</li>
        </ul>
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
        <div className={styles.basket__icon_burger}>
          {<BasketIcon style={cart} url={"https://dummyjson.com/products"} />}
        </div>
      </div>
    </div>
  );
};
