import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";

import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          User name
        </label>
        <Field
          className={css.input}
          type="text"
          name="name"
          id={nameId}
          autoComplete="name"
        />
        <label className={css.label} htmlFor={emailId}>
          Email
        </label>
        <Field
          className={css.input}
          type="email"
          name="email"
          id={emailId}
          autoComplete="email"
        />
        <label className={css.label} htmlFor={passwordId}>
          Password
        </label>
        <Field
          className={css.input}
          type="password"
          name="password"
          id={passwordId}
          autoComplete="new-password"
        />
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
