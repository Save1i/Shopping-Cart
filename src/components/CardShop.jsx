import { useEffect, useState } from "react";
import { Image } from "./Image";

const useCard = (url) => {
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then((data) => {
        // Проверяем тип ответа: массив или объект
        if (Array.isArray(data)) {
          const titles = data.map((item) => item["title"]);
          const prices = data.map((item) => item["price"]);
          setTitle(titles);
          setPrice(prices);
        } else {
          setTitle([data["title"]]);
          setPrice([data["price"]]);
        }
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { title, price, error, loading };
};

export const CardShop = ({ url }) => {
  const { title, price, error, loading } = useCard(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div>
      <Image url={"https://fakestoreapi.com/products/1"} />
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
};
