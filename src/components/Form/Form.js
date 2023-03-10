import { useDispatch, useSelector } from 'react-redux';
import { addContactAction } from 'redux/contacts/contacts.slice';
import css from './Form.module.css';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts);

  const onSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const latestId = Math.max(...contacts.map(contact => contact.id));
    const nameValue = form.elements.text.value;
    const phoneValue = form.elements.phone.value;
    dispatch(addContactAction(latestId + 1, nameValue, phoneValue));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="text"
          placeholder="Enter your name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.label}>
        Phone Number
        <input
          className={css.input}
          type="tel"
          name="phone"
          placeholder="Enter your phone number..."
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.submit} type="submit">
        Add contact
      </button>
    </form>
  );
};
