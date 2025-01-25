import { useCart } from "../hooks/CartContext";
import { useCard } from "../hooks/useCard";
import styles from "../styles/cardBasket.module.css";
import { AddToCartBtn } from "./AddToCartBtn";
import { DeleteToItemBtn } from "./DeleteToItemBtn";
import { RemoveToCardBtn } from "./RemoveToCardBtn";

export const CardBasket = ({ url, qty }) => {
  const { products, error, loading } = useCard(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} qty={qty} />
      ))}
    </>
  );
};
const ProductCard = ({ product, qty }) => {
  const { title, price, images, id } = product;
  const { state } = useCart();
  console.log(Object.values(state.items));
  const subtotal = qty * price;

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={images} alt={title} />
      <h2 className={styles.card__title}>{title}</h2>
      <p className={styles.card__price}>{price}</p>
      <p className={styles.card__subtotal}>{subtotal}</p>
      <p className={styles.card__qty}>{qty}</p>
      <AddToCartBtn id={id} text={"+"} className={"item__add-btn"} />
      <DeleteToItemBtn id={id} />
      <RemoveToCardBtn id={id} />
    </div>
  );
};
