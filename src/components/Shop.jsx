import { CardShop } from "./CardShop";
import styles from "../styles/shop.module.css";

export const Shop = ({ url }) => {
  return (
    <div className={styles.shop}>
      <div className={styles.shop__inner}>
        <CardShop url={url} />
      </div>
    </div>
  );
};
