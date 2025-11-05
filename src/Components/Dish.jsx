export default function Dish(props) {
  console.log(props);

  return (
    <div>
      <h3>{props.tittel}</h3>
      <p>{props.pris}</p>
      <p>{props.ingredienser}</p>
    </div>
  );
}
