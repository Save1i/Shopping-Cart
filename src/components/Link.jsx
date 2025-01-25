import { Link } from "react-router-dom";
import styles from "../styles/links.module.css";

export const Links = (url, text, className) => {
  return (
    <Link to={url} className={`${styles[className]}`}>
      {text}
    </Link>
  );
};
