
import styles from "./Dish.module.css";

export default function Dish({tittel, pris, ingredienser}) {

  return (
    <div className={styles.card}>
      <h3>{tittel}</h3>
      <p>{ingredienser}</p>
      <p>{pris}</p>
    </div>
  );
}
