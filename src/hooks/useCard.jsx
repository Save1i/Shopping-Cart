import { useEffect, useState } from "react";

export const useCard = (url) => {
  const [products, setProducts] = useState([]);
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
        // Гарантируем, что данные — это массив
        const normalizedData = Array.isArray(data) ? data : [data];
        setProducts(normalizedData);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { products, error, loading };
};
