import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={css.container}>
      <title>Registration</title>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
