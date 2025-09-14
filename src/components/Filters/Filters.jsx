import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import { Field, Form, Formik } from "formik";
import { NumericFormat } from "react-number-format";

import css from "./Filters.module.css";
import { changeFilter } from "../../redux/filters/slice.js";
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

  const handleSubmit = (values, actions) => {
    dispatch(changeFilter(values));
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
              <Field name="minMileage">
                {({ form }) => (
                  <NumericFormat
                    id={mileFromId}
                    className={css.inputMile}
                    prefix="From "
                    placeholder="From"
                    thousandSeparator=","
                    allowNegative={false}
                    onValueChange={(values) => {
                      form.setFieldValue("minMileage", values.value);
                    }}
                  />
                )}
              </Field>

              <Field name="maxMileage">
                {({ form }) => (
                  <NumericFormat
                    id={mileToId}
                    className={css.inputMile}
                    prefix="To "
                    placeholder="To"
                    thousandSeparator=","
                    allowNegative={false}
                    onValueChange={(values) => {
                      form.setFieldValue("maxMileage", values.value);
                    }}
                  />
                )}
              </Field>
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
