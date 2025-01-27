import { useEffect, useRef } from "react";
// import { useCart } from "../hooks/CartContext";
import { useCard } from "../hooks/useCard";
import styles from "../styles/cardBasket.module.css";
import { AddToCartBtn } from "./AddToCartBtn";
import { DeleteToItemBtn } from "./DeleteToItemBtn";
import { RemoveToCardBtn } from "./RemoveToCardBtn";

export const CardBasket = ({ url, qty, onSubtotalChange }) => {
  const { products, error, loading } = useCard(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          qty={qty}
          onSubtotalChange={onSubtotalChange}
        />
      ))}
    </>
  );
};

const ProductCard = ({ product, qty, onSubtotalChange }) => {
  const { title, price, images, id } = product;

  // Рассчитываем сумму для текущего продукта
  const subtotal = qty * price;

  const prevSubtotalRef = useRef(null);

  useEffect(() => {
    if (onSubtotalChange && subtotal !== prevSubtotalRef.current) {
      onSubtotalChange(id, subtotal);
    }
    prevSubtotalRef.current = subtotal; // Обновляем предыдущий subtotal
  }, [id, subtotal, onSubtotalChange]);
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={images} alt={title} />
      <h2 className={styles.card__title}>{title}</h2>
      <p className={styles.card__price}>${price}</p>
      <div className={styles.qty__container}>
        <p className={styles.qty__text}>{qty}</p>
        <DeleteToItemBtn id={id} />
        <AddToCartBtn id={id} text={"+"} className={"item__add-btn"} />
      </div>
      <p className={styles.card__subtotal}>${subtotal}</p>
      <RemoveToCardBtn id={id} />
    </div>
  );
};
