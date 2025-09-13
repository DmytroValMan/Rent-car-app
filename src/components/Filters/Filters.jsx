import { useDispatch, useSelector } from "react-redux";
import { useEffect, useId } from "react";
import { Field, Form, Formik } from "formik";

import css from "./Filters.module.css";
import { changeFilter, resetFilters } from "../../redux/filters/slice.js";
import { fetchCars } from "../../redux/cars/operations.js";
import { Select } from "../Select/Select.jsx";
import { selectBrandsListFilter } from "../../redux/filters/selectors.js";

const Filters = () => {
  const dispatch = useDispatch();
  const brandId = useId();
  const priceId = useId();
  const mileFromId = useId();
  const mileToId = useId();

  const brands = useSelector(selectBrandsListFilter);

  const rentalPrices = [30, 40, 50, 60, 70, 80];

  // useEffect(() => {
  //   dispatch(fetchCars({}));
  // }, [dispatch]);

  const handleSubmit = (values, actions) => {
    // dispatch(resetFilters());
    dispatch(changeFilter(values));
    // dispatch(fetchCars({ ...values, page: 1 }));
    // actions.resetForm();
  };

  const initialValues = {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  };

  return (
    <div className={css.formicWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.formWrapper}>
          <Select
            className={css.inputBrand}
            name="brand"
            id={brandId}
            placeholder="Choose a brand"
            label="Car brand"
            options={brands}
          />
          <Select
            className={css.inputPrice}
            name="rentalPrice"
            id={priceId}
            placeholder="Choose a price"
            label="Price/ 1 hour"
            options={rentalPrices}
          />
          <div className={css.mileWrapper}>
            <p className={css.mileLabel}>Car mileage / km</p>
            <div className={css.mileInputsWrapper}>
              <Field
                className={css.inputMile}
                type="number"
                name="minMileage"
                placeholder="From"
                id={mileFromId}
              />
              <Field
                className={css.inputMile}
                type="number"
                name="maxMileage"
                placeholder="To"
                id={mileToId}
              />
            </div>
          </div>
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Filters;
