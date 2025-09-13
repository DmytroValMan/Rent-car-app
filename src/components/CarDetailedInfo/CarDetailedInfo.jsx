import { useSelector } from "react-redux";

import css from "./CarDetailedInfo.module.css";
import { selectCarById } from "../../redux/cars/selectors.js";

const CarDetailedInfo = () => {
  const car = useSelector(selectCarById);

  const fileName = car.img.split("/").pop();
  const fourDigitId = fileName.split("-")[0];

  const parts = car.address.split(",");
  const city = parts[parts.length - 2].trim();
  const country = parts[parts.length - 1].trim();
  const formatedMileage = Number(car.mileage)?.toLocaleString("uk-UA");
  const formatedType = car.type[0] + car.type.slice(1).toLowerCase();

  return (
    <div className={css.allWrapper}>
      <div className={css.detailsTitleWrapper}>
        <h2 className={css.title}>
          {car.brand} {car.model}, {car.year}
          <span className={css.fourDigitId}>id: {fourDigitId}</span>
        </h2>
        <div className={css.placeMileageWrapper}>
          <div className={css.placeWrapper}>
            <svg width="16" height="16" className={css.iconPlace}>
              <use href="/symbol-defs.svg#icon-location" />
            </svg>
            <p className={css.place}>
              {city}, {country}
            </p>
          </div>
          <p className={css.mileage}>Mileage: {formatedMileage} km</p>
        </div>
        <p className={css.price}>${car.rentalPrice}</p>
        <p className={css.description}>{car.description}</p>
      </div>

      <div className={css.detailsWrapper}>
        <div className={css.listWrapper}>
          <h3 className={css.subtitle}>Rental Conditions: </h3>
          <ul className={css.list}>
            <li className={css.item}>
              <svg width="16" height="16" className={css.icon}>
                <use href="/symbol-defs.svg#icon-check" />
              </svg>
              {car.rentalConditions[0]}
            </li>
            <li className={css.item}>
              <svg width="16" height="16" className={css.icon}>
                <use href="/symbol-defs.svg#icon-check" />
              </svg>
              {car.rentalConditions[1]}
            </li>
            <li className={css.item}>
              <svg width="16" height="16" className={css.icon}>
                <use href="/symbol-defs.svg#icon-check" />
              </svg>
              {car.rentalConditions[2]}
            </li>
          </ul>
        </div>
        <div className={css.listWrapper}>
          <h3 className={css.subtitle}>Car Specifications:</h3>
          <ul className={css.list}>
            <li className={css.item}>
              <svg width="16" height="16" className={css.icon}>
                <use href="/symbol-defs.svg#icon-year" />
              </svg>
              Year: {car.year}
            </li>
            <li className={css.item}>
              <svg width="16" height="16" className={css.icon}>
                <use href="/symbol-defs.svg#icon-car" />
              </svg>
              Type: {formatedType}
            </li>
            <li className={css.item}>
              <svg width="16" height="16" className={css.icon}>
                <use href="/symbol-defs.svg#icon-fuel" />
              </svg>
              Fuel Consumption: {car.fuelConsumption}
            </li>
            <li className={css.item}>
              <svg width="16" height="16" className={css.icon}>
                <use href="/symbol-defs.svg#icon-engine-volume" />
              </svg>
              Engine Size: {car.engineSize}
            </li>
          </ul>
        </div>
        <div className={css.listWrapper}>
          <h3 className={css.subtitle}>Accessories and functionalities:</h3>
          <ul className={css.list}>
            <li className={css.item}>
              <svg width="16" height="16" className={css.icon}>
                <use href="/symbol-defs.svg#icon-check" />
              </svg>
              {car.accessories[0]}
            </li>
            <li className={css.item}>
              <svg width="16" height="16" className={css.icon}>
                <use href="/symbol-defs.svg#icon-check" />
              </svg>
              {car.accessories[1]}
            </li>
            <li className={css.item}>
              <svg width="16" height="16" className={css.icon}>
                <use href="/symbol-defs.svg#icon-check" />
              </svg>
              {car.functionalities[1]}
            </li>
            <li className={css.item}>
              <svg width="16" height="16" className={css.icon}>
                <use href="/symbol-defs.svg#icon-check" />
              </svg>
              {car.functionalities[2]}
            </li>
            <li className={css.item}>
              <svg width="16" height="16" className={css.icon}>
                <use href="/symbol-defs.svg#icon-check" />
              </svg>
              {car.functionalities[0]}
            </li>
            <li className={css.item}>
              <svg width="16" height="16" className={css.icon}>
                <use href="/symbol-defs.svg#icon-check" />
              </svg>
              {car.accessories[2]}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetailedInfo;
