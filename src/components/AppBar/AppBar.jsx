/*import { useSelector } from "react-redux";*/
import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";


export default function AppBar() {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
}
