import { useSelector, useDispatch } from 'react-redux';
import { deleteSelectedContact } from 'redux/contacts/contacts.thunk';
import css from './Contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts);
  const filterName = useSelector(store => store.filters.name);
  //console.log(filterName);
  const visibleNames = contacts.list.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  const onContactDelete = id => dispatch(deleteSelectedContact(id));

  return (
    <ul className={css.list}>
      {visibleNames.map(contact => (
        <li className={css.item} key={contact.id}>
          {contact.name}: {contact.phone}
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
