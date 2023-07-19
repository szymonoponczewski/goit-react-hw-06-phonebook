import { addContact } from "../../redux/contactSlice";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = event.target.elements;

    dispatch(addContact(name.value, number.value));

    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.formContainer}>
        <label className={css.formLabel}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[A-Za-z.' \-]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.formInput}
          />
        </label>

        <label className={css.formLabel}>
          Number
          <input
            type="tel"
            name="number"
            pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.formInput}
          />
        </label>

        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
