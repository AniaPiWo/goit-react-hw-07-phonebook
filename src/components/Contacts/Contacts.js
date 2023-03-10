import { useSelector, useDispatch } from 'react-redux';
import { deleteSelectedContact } from 'redux/contacts/contacts.thunk';
import css from './Contacts.module.css';
import { selectContactsList, selectFilter } from 'redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  const filterByName = useSelector(selectFilter);

  const visibleNames = contacts.filter(
    contact =>
      contact.name &&
      contact.name.toLowerCase().includes(filterByName.toLowerCase())
  );
  //console.log(filterName);
  //console.log(visibleNames);
  const onContactDelete = id => dispatch(deleteSelectedContact(id));

  return (
    <ul className={css.list}>
      {visibleNames.map(contact => (
        <li className={css.item} key={contact.id}>
          <div className={css.nameBox}>
            <span className={css.name}>{contact.name}</span>{' '}
            <span>{contact.phone}</span>
          </div>
          <button
            id={contact.id}
            className={css.deleteBtn}
            type="button"
            onClick={() => onContactDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
