import { useEffect, useState } from "react";
import { FaBagShopping } from "react-icons/fa6";

export const BasketIcon = ({ url }) => {
  const [prod, setProd] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

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
        setProd(normalizedData);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return (
    <>
      <FaBagShopping />
      <span>{prod.length}</span>
    </>
  );
};
