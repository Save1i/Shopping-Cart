import { FaGithub } from "react-icons/fa";
import styles from "../styles/footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/Save1i/Shopping-Cart"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footer__link}
      >
        <FaGithub size={24} />
        <span className={styles.link__text}>by Savely</span>
      </a>
    </footer>
  );
};
