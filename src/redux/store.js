import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filters/filters.slice';
import { contactsReducer } from './contacts/contacts.slice';
import { ourLogger } from './middleware/logger';

export const store = configureStore({
  reducer: { contacts: contactsReducer, filters: filtersReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ourLogger),
});
