import styles from "./Dish.module.css";

export default function Dish({ tittel, pris, ingredienser }) {
  return (
    <>
      <div className={styles.card}>
          <h3>{tittel}</h3>
            <h4 className={styles.price}>{pris}</h4>
        <h4 className={styles.ing}>{ingredienser}</h4>
      </div>
    </>
  );
}
