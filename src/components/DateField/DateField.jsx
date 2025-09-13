import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateField.css";
import css from "./DateField.module.css";

const DateField = ({ name, placeholder }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  return (
    <div className={css.wrapper}>
      <DatePicker
        className={css.input}
        selected={field.value}
        onChange={(val) => setFieldValue(name, val)}
        placeholderText={placeholder}
        dateFormat="dd.MM.yyyy"
        name={name}
      />
      {meta.touched && meta.error && (
        <div className={css.error}>{meta.error}</div>
      )}
    </div>
  );
};

export default DateField;
