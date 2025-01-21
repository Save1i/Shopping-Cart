import { v4 as uuidv4 } from "uuid";
import styles from "../styles/images.module.css";

export const Image = ({ url, loading, error }) => {
  console.log(styles);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <img key={uuidv4()} className={styles.card__img} src={url} alt={`Product`} />
    </>
  );
};
