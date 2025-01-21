import { useCard } from "./useCard";

export const CardShop = ({ url }) => {
  const { products, error, loading } = useCard(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { title, price, image } = product;

  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
};
