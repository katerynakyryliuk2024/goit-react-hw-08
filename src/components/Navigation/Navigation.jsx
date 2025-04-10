import { Navlink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <Navlink className={css.link} to="/">
        Home
      </Navlink>
      <Navlink className={css.link} to="/contacts">
        Contacts
      </Navlink>
    </nav>
  );
}
