import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";

import css from "./OrderForm.module.css";
import DateField from "../DateField/DateField.jsx";

const OrderForm = () => {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const feedbackSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .max(20, "Max 64 characters")
      .required("Name is required"),
    email: Yup.string()
      .trim()
      .email("Must be a valid email!")
      .required("Email is required"),
    date: Yup.date(),
    comment: Yup.string().trim().max(150, "Max 150 characters"),
  });

  const handleSubmit = (values, actions) => {
    setTimeout(() => {
      console.log("Booking data:", values);
      toast.success("Your booking was successful!");
      actions.resetForm();
    }, 1000);
  };

  return (
    <div className={css.formWrapper}>
      <div className={css.titleWrapper}>
        <h3 className={css.title}>Book your car now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={feedbackSchema}
      >
        <Form>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Name*"
          />
          <ErrorMessage className={css.errorMsg} name="name" component="span" />
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Email*"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="email"
            component="span"
          />
          <DateField name="date" placeholder="Booking date" />
          <ErrorMessage className={css.errorMsg} name="date" component="span" />
          <Field
            as="textarea"
            className={css.textarea}
            name="comment"
            placeholder="Comment"
          />
          <ErrorMessage className={css.errorMsg} name="date" component="span" />
          <button className={css.btn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default OrderForm;
