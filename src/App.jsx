import "./App.css";
import { menu } from "./Data.js";
import Menu from "./Components/Menu.jsx";

export default function App() {
  const Appetizer = menu.filter((dish) => dish.kategori === "Forrett");
  const MainCourse = menu.filter((dish) => dish.kategori === "Hovedrett");
  const Dessert = menu.filter((dish) => dish.kategori === "Dessert");

  return (
    <div>
      <h1>Restaurantmeny</h1>
      <h2>Forretter</h2>
      <Menu dishes={Appetizer} />
      <h2>Hovedretter</h2>
      <Menu dishes={MainCourse} />
      <h2>Dessert</h2>
      <Menu dishes={Dessert} />
    </div>
  );
}
