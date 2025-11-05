import Dish from "./Dish.jsx";

export default function Menu({ dishes }) {
  console.log(dishes);

  return (
    <div>
      {dishes.map((dish) => (
        <Dish key={dish.id} {...dish} />
      ))}
    </div>
  );
}
