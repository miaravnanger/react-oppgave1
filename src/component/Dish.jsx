export default function Dish({tittel, pris, ingredienser, kategori}) {
    return (
      <div style={{ border: "solid white", margin: "1rem" }}>
        <h3>{tittel}</h3>
        <h3>{pris}</h3>
        <h3>{ingredienser}</h3>
        <h3>{kategori}</h3>
      </div>
    );
}