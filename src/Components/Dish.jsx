import styles from "./Dish.module.css";

export default function Dish({ tittel, pris, ingredienser }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.header}>
          <h3>{tittel}</h3>
          <span className={styles.price}>
            <p>{pris}</p>
          </span>
        </div>
        <p>{ingredienser}</p>
      </div>
    </>
  );
}
