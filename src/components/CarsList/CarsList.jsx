import { useDispatch, useSelector } from "react-redux";

import CarCard from "../CarCard/CarCard.jsx";
import css from "./CarsList.module.css";
import { selectCars, selectTotalPages } from "../../redux/cars/selectors.js";
import { changeFilter } from "../../redux/filters/slice.js";
import { fetchCars } from "../../redux/cars/operations.js";
import { selectPageFilter } from "../../redux/filters/selectors.js";

const CarsList = () => {
  const carsList = useSelector(selectCars);
  const dispatch = useDispatch();
  const page = useSelector(selectPageFilter);
  // const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const handleClick = () => {
    const nextPage = page + 1;
    dispatch(changeFilter({ page: nextPage }));
    dispatch(fetchCars({ page: nextPage }));
  };

  return (
    <>
      <ul className={css.list}>
        {carsList.map((car) => (
          <li className={css.item} key={car.id}>
            <CarCard car={car} />
          </li>
        ))}
      </ul>
      {page < totalPages && (
        <button className={css.btn} type="button" onClick={handleClick}>
          Load more
        </button>
      )}
    </>
  );
};

export default CarsList;
