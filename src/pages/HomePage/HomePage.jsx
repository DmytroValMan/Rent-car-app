import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        📱 ContactBook — your personal phone directory
      </h1>
      <p className={css.description}>
        <strong>ContactBook</strong> is a simple and convenient app for storing
        your contacts online.
      </p>
      <ul className={css.features}>
        <li>Add new contacts with name and phone number</li>
        <li>Delete unnecessary entries</li>
        <li>Quickly search for a contact by name or number</li>
        <li>Edit any contact at any time</li>
      </ul>
      <p className={css.security}>
        🔐 Only you have access to your contacts — everything is stored
        securely.
      </p>
      <p className={css.cta}>Sign up or log in to start using the app.</p>
      <div className={css.developer}>
        <h2>👨‍💻 Developed by</h2>
        <p>
          <strong>DmytroValMan</strong>
        </p>
        <p>Frontend Developer</p>
        <p>
          📧{" "}
          <a className={css.link} href="mailto:dmitri.m2011@gmail.com">
            dmitri.m2011@gmail.com
          </a>
        </p>
        <p>
          🌐{" "}
          <a
            className={css.link}
            href="https://github.com/DmytroValMan/goit-react-hw-08"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
