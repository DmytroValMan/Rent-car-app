import css from "./Header.module.css";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";

const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
