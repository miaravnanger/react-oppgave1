import "./App.css";
import { menu } from "./Data.js";
import Menu from "./Components/Menu.jsx";

export default function App() {
  const Appetizer = menu.filter((dish) => dish.kategori === "Forrett");
  const MainCourse = menu.filter((dish) => dish.kategori === "Hovedrett");
  const Dessert = menu.filter((dish) => dish.kategori === "Dessert");

  return (
    <div className="menu-container">
      <h1>Restaurantmeny</h1>
      <h2 className="section-title">Forretter</h2>
      <div className="category">
        <Menu dishes={Appetizer} />
      </div>
      <h2 className="section-title">Hovedretter</h2>
      <div className="category">
        <Menu dishes={MainCourse} />
      </div>
      <h2 className="section-title">Dessert</h2>
      <div className="category">
        <Menu dishes={Dessert} />
      </div>
    </div>
  );
}
