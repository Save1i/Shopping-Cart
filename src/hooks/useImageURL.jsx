import { useEffect, useState } from "react";

export const useImageURL = (url, key = "image", defaultImage = "/placeholder.jpg") => {
  const [imageURLs, setImageURLs] = useState([]);
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
          const urls = data.map((item) => item[key] || defaultImage);
          setImageURLs(urls);
        } else {
          setImageURLs([data[key] || defaultImage]);
        }
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url, key, defaultImage]);

  return { imageURLs, error, loading };
};
