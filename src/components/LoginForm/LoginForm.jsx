import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";

import css from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
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
          autoComplete="current-password"
        />
        <button className={css.btn} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
