import { useCart } from "../hooks/CartContext";
import { Navbar } from "./NavBar";
import { CardBasket } from "./CardBasket";
import { DefaultBasket } from "./DefaultBasket";
import { EstimatedTotal } from "./EstimatedTotal";
import styles from "../styles/basket.module.css";

import { useEffect, useState } from "react";

export const Basket = () => {
  const { state } = useCart();
  const [subtotals, setSubtotals] = useState({});

  const handleSubtotalChange = (id, subtotal) => {
    setSubtotals((prev) => ({ ...prev, [id]: subtotal }));
  };

  useEffect(() => {
    const validIds = Object.keys(state.items); // Только существующие товары
    setSubtotals((prev) =>
      Object.fromEntries(Object.entries(prev).filter(([id]) => validIds.includes(id)))
    );
  }, [state.items]);

  const totalSum = Object.values(subtotals).reduce((sum, value) => sum + value, 0);

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
                onSubtotalChange={handleSubtotalChange}
              />
            ))}
          </div>
          <EstimatedTotal totalSum={totalSum} />
        </div>
      ) : (
        <DefaultBasket />
      )}
    </div>
  );
};
