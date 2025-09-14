import { Field } from "formik";
import css from "./Select.module.css";

export const Select = ({
  className,
  label,
  name,
  placeholder,
  options = [],
  id,
}) => {
  return (
    <div className={css.selectWrapper}>
      <label className={css.label} htmlFor={id}>
        {label}
      </label>
      <Field as="select" name={name} id={id} className={className}>
        <option className={css.placeholder} value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option className={css.item} key={option} value={option}>
            {name === "rentalPrice" ? `To $${option}` : option}
          </option>
        ))}
      </Field>
    </div>
  );
};
