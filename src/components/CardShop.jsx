import { useState } from "react";
import { useCard } from "../hooks/useCard";
import styles from "../styles/cardShop.module.css";
import { AddToCartBtn } from "./AddToCartBtn";
import { Skeleton } from "@mui/material";
import { CardShopSkeleton } from "./CardShopSkeleton";

export const CardShop = ({ url }) => {
  const { products, loading, error } = useCard(url);

  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      {loading && <CardShopSkeleton cards={8} />}

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

const ProductCard = ({ product }) => {
  const { title, price, images, id } = product;
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={styles.card}>
      {imageError ? (
        <Skeleton sx={{ transform: "none" }} width={280} height={280} />
      ) : (
        <img className={styles.card__img} src={images[0]} alt={title} onError={handleImageError} />
      )}
      <div className={styles.card__text}>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__price}>${price}</p>
      </div>
      <AddToCartBtn id={id} />
    </div>
  );
};
