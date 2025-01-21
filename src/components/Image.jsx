// import { useImageURL } from "../hooks/useImageURL";
import { v4 as uuidv4 } from "uuid";

export const Image = ({ url, loading, error }) => {
  // const { imageURLs, loading, error } = useImageURL(url, "image");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <img key={uuidv4()} src={url} alt={`Product`} />
    </>
  );
};
