import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: event.currentTarget.name.value,
      number: event.currentTarget.name.value,
    };
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExist) {
      return toast.warn(`${contact.name} is already in contacts.`);
    }
    dispatch(addContact(contact));
    event.currentTarget.reset();
  };

  return (
    <section className={css.form}>
      <h1 className={css.form__title}>Phonebook</h1>
      <form className={css.form__container} onSubmit={handleSubmit}>
        <label className={css.form__label} htmlFor={nanoid()}>
          Name
        </label>
        <input
          type="text"
          name="name"
          className={css.form__input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          id={nanoid()}
          required
        />
        <label className={css.form__label} htmlFor={nanoid()}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          className={css.form__input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter phone number"
          id={nanoid()}
          required
        />
        <button className={css.form__btn} type="submit">
          Add contact
        </button>
      </form>
    </section>
  );
};
