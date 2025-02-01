import { Skeleton } from "@mui/material";
import styles from "../styles/cardShopSkeleton.module.css";

export const CardShopSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className={styles.card} key={i}>
        <Skeleton sx={{ transform: "none" }} width={273} height={280} />
        <div className={styles.card__text}>
          <Skeleton sx={{ transform: "none" }} height={20} />
          <Skeleton sx={{ transform: "none", margin: "5px 0 5px 0" }} height={22} />
        </div>
        <Skeleton sx={{ transform: "none", margin: "0 auto" }} height={36} width={140} />
      </div>
    ));
};
