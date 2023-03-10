import { createAction } from '@reduxjs/toolkit';

export const addContactAction = createAction(
  'contacts/addContact',
  (id, name, phone) => ({
    payload: {
      id,
      name,
      phone,
    },
  })
);

export const deleteContactAction = createAction(
  'contacts/deleteContact',
  id => ({ payload: { id } })
);
