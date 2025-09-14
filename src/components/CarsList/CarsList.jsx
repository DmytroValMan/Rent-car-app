import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ClockLoader } from "react-spinners";

import CarCard from "../CarCard/CarCard.jsx";
import css from "./CarsList.module.css";
import {
  selectCars,
  selectLoading,
  selectTotalPages,
} from "../../redux/cars/selectors.js";
import { changeFilter } from "../../redux/filters/slice.js";
import { fetchCars } from "../../redux/cars/operations.js";
import {
  selectFilters,
  selectPageFilter,
} from "../../redux/filters/selectors.js";

const CarsList = () => {
  const carsList = useSelector(selectCars);
  const dispatch = useDispatch();
  const page = useSelector(selectPageFilter);
  const isLoading = useSelector(selectLoading);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCars(filters));
  }, [filters, dispatch]);

  const handleClick = () => {
    const nextPage = page + 1;
    dispatch(changeFilter({ page: nextPage }));
    dispatch(fetchCars({ page: nextPage }));
  };

  return isLoading ? (
    <div className={css.loaderWrapper}>
      <ClockLoader color="#3470ff" size={300} />
    </div>
  ) : (
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
