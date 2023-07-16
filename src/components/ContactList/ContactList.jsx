import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filteredContacts = useSelector((state) => state.filters);

  const visibleContacts = filteredContacts
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filteredContacts.filter)
      )
    : contacts;

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
