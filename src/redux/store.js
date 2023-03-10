import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filters/filters.slice';
import { contactsReducer } from './contacts/contacts.slice';

export const store = configureStore({
  reducer: { contacts: contactsReducer, filters: filtersReducer },
});

/*ver1 import { contactsReducer } from './contacts/contacts.reducer';
import { filterReducer } from './filters/filters.reducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { contacts: contactsReducer, filters: filterReducer },
});
 */
