import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const seachedContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {seachedContacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact}></Contact>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
