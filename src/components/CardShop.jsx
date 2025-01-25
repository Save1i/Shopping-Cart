import { useCard } from "../hooks/useCard";
import styles from "../styles/cardShop.module.css";
import { AddToCartBtn } from "./AddToCartBtn";

export const CardShop = ({ url }) => {
  const { products, error, loading } = useCard(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

const ProductCard = ({ product }) => {
  const { title, price, images, id } = product;

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={images[0]} alt={title} />
      <h2 className={styles.card__title}>{title}</h2>
      <p className={styles.card__price}>{price}</p>
      <AddToCartBtn id={id} />
    </div>
  );
};
