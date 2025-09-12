import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import css from "./CarCard.module.css";
import { selectFavorites } from "../../redux/favorites/selectors.js";
import { toggleCar } from "../../redux/favorites/slice.js";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorites);

  const {
    id,
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    description,
  } = car;

  const parts = address.split(",");
  const city = parts[parts.length - 2].trim();
  const country = parts[parts.length - 1].trim();
  const formatedMileage = Number(mileage)?.toLocaleString("uk-UA");
  const isFavorite = favoriteCars.some((item) => item.id === car.id);

  const handleFavoritesClick = () => {
    dispatch(toggleCar(car));
  };

  return (
    <div className={css.cardWrapper}>
      <div className={css.imgWrapper}>
        <img className={css.img} src={img} alt={description} />
        <button
          className={css.iconBtn}
          type="button"
          onClick={handleFavoritesClick}
        >
          {/* <svg
            className={`${css.photoIcon} ${isFavorite ? css.favoriteIcon : ""}`}
            width="16"
            height="16"
            viewBox="-8 -4 32 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isFavorite ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.99978 1.31405C12.4378 -3.24795 23.5338 4.73505 7.99978 15.0001C-7.53422 4.73605 3.56178 -3.24795 7.99978 1.31405Z"
                fill="var(--button)"
              />
            ) : (
              <path
                fill="none"
                stroke="#f2f4f7"
                strokeWidth="1.5"
                d="M7.99978 1.31405C12.4378 -3.24795 23.5338 4.73505 7.99978 15.0001C-7.53422 4.73605 3.56178 -3.24795 7.99978 1.31405Z"
              />
            )}
          </svg> */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className={`${css.photoIcon} ${isFavorite ? css.favoriteIcon : ""}`}
          >
            {isFavorite ? (
              <use href="/heart-filled.svg" />
            ) : (
              <use href="/heart.svg" />
            )}
          </svg>
        </button>
      </div>
      <div className={css.titleWrapper}>
        <h2 className={css.title}>
          {brand} <span className={css.titleSpan}>{model}</span>, {year}
        </h2>
        <p>${rentalPrice}</p>
      </div>
      <ul className={css.infoWrapper}>
        <li className={css.item}>{city}</li>
        <li className={css.item}>{country}</li>
        <li className={css.item}>{rentalCompany}</li>
      </ul>
      <ul className={css.infoWrapper}>
        <li className={css.item}>{type}</li>
        <li className={css.item}>{formatedMileage} km</li>
      </ul>
      <Link to={`/catalog/${id}`} className={css.link}>
        Read more
      </Link>
    </div>
  );
};

export default CarCard;
