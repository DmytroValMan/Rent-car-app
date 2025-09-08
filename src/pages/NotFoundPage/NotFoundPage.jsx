import { Link } from "react-router-dom";

import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <p className={css.message}>There is no such page!</p>
      <Link className={css.link} to="/">
        Go to home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
