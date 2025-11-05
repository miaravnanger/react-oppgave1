import Dish from "./Dish.jsx";
import styles from "./Menu.module.css";

export default function Menu({ dishes }) {
  console.log(dishes);

  return (
    <div className={styles.grid}>
      {dishes.map((dish) => (
        <Dish key={dish.id} {...dish} />
      ))}
    </div>
  );
}
