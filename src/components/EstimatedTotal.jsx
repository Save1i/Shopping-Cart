import styles from "../styles/estimatedTotal.module.css";

export const EstimatedTotal = () => {
  return (
    <div className={styles.basket__total}>
      <div className={styles.total__inner}>
        <h2 className={styles.total__title}>Summary</h2>
        <div className={styles.total_info}>
          <div className={styles.total__input_box}>
            <h3 className={styles.input__title}>Estimate Shipping and Tax</h3>
            <p className={styles.input__info}></p>
          </div>
          <div className={styles.total__input_box}>
            <h3 className={styles.input__title}>State/Province</h3>
            <input className={styles.input}></input>
          </div>
          <div className={styles.total__input_box}>
            <h3 className={styles.input__title}>State/Province</h3>
            <input className={styles.input}></input>
          </div>
        </div>
        <div className={styles.total}>
          <p className={styles.total__titla}>Subtotal</p>
          <div className={styles.total__text}>
            <p className={styles.text}>Order Total</p>
            <p className={styles.total__price}>{}</p>
          </div>
        </div>
        <button>Proceed To Checkout</button>
      </div>
    </div>
  );
};
