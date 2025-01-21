import { useImageURL } from "../hooks/useImageURL";

export const Shop = () => {
  const { imageURLs, loading, error } = useImageURL(
    "https://fakestoreapi.com/products/10",
    "image"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      {imageURLs.map((imageURL, index) => (
        <img key={index} src={imageURL} alt={`Product ${index + 1}`} />
      ))}
    </>
  );
};
