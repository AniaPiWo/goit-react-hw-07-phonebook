import { addContactAction, deleteContactAction } from './contacts.actions';
import { createReducer } from '@reduxjs/toolkit';

const initialContactsState = [
  { id: 1, name: 'Harry Potter', phone: '459-12-56' },
  { id: 2, name: 'Hermione Granger', phone: '443-89-12' },
  { id: 3, name: 'Lord Voldemort', phone: '645-17-79' },
  { id: 4, name: 'Albus Dumbledor', phone: '227-91-26' },
  { id: 5, name: 'Severus Snape', phone: '227-91-26' },
];

export const contactsReducer = createReducer(initialContactsState, {
  [addContactAction]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContactAction]: (state, action) => {
    const { id } = action.payload;
    return state.filter(contact => contact.id !== id);
  },
});
