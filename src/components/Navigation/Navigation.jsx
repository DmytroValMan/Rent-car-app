import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

const Navigation = () => {
  const linkClass = ({ isActive }) =>
    `${css.link} ${isActive ? css.active : ""}`;

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={linkClass}>
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
