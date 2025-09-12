import { Link } from "react-router-dom";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <Link className={css.link} to="/">
      <div className={css.logo}>
        <svg width="104" height="16">
          <use href="/symbol-defs.svg#icon-logo" />
        </svg>
      </div>
    </Link>
  );
}
