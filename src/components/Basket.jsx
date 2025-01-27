// import { Link } from "react-router-dom";
import { useCart } from "../hooks/CartContext";
import { Navbar } from "./NavBar";
import { CardBasket } from "./CardBasket";
import { DefaultBasket } from "./DefaultBasket";
import { EstimatedTotal } from "./EstimatedTotal";
import styles from "../styles/basket.module.css";

export const Basket = () => {
  const { state } = useCart();

  return (
    <div>
      <Navbar />
      {Object.entries(state.items).length !== 0 ? (
        <div className={styles.basket}>
          <div className={styles.basket__cards}>
            {Object.entries(state.items).map(([id, qty]) => (
              <CardBasket
                key={id}
                url={`https://api.escuelajs.co/api/v1/products/${id}`}
                qty={qty}
              />
            ))}
          </div>
          <EstimatedTotal />
        </div>
      ) : (
        <DefaultBasket />
      )}
    </div>
  );
};
