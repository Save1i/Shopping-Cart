import styles from "../styles/estimatedTotal.module.css";

export const EstimatedTotal = ({ totalSum }) => {
  const handleClick = () => {
    window.location.reload(); // Перезагружает страницу
  };
  return (
    <div className={styles.basket__total}>
      <div className={styles.total__inner}>
        <h2 className={styles.total__title}>Summary</h2>
        <div className={styles.total_info}>
          <div className={styles.total__input_box}>
            <h3 className={styles.input__title}>Estimate Shipping and Tax</h3>
            <p className={styles.input__info}>Enter your destination to get a shipping estimate.</p>
          </div>
          <div className={styles.total__input_box}>
            <h3 className={styles.input__title}>State/Province</h3>
            <input className={styles.input} placeholder="State/Province"></input>
          </div>
          <div className={styles.total__input_box}>
            <h3 className={styles.input__title}>Zip/Postal Code</h3>
            <input className={styles.input} placeholder="Postal Code"></input>
          </div>
        </div>
        <div className={styles.total}>
          <p className={styles.total__titla}>Subtotal</p>
          <div className={styles.total__text}>
            <p className={styles.text}>Order Total</p>
            <p className={styles.total__price}>${totalSum.toFixed(2)}</p>
          </div>
        </div>
        <button className={styles.procced__btn} onClick={handleClick}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};
