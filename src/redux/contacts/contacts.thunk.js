import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from 'components/api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (arg, thunkAPI) => {
    console.log('thunkAPI:', thunkAPI);
    try {
      const response = await getContacts(false);

      //console.log(contacts);
      return response.contacts;
    } catch (e) {
      throw new Error('Cant fetch contacts!');
    }
  }
);

export const deleteSelectedContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteSelectedContact(id);

      return id;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async ({ id, name, phone }, { rejectWithValue }) => {
    try {
      await addNewContact({ id, name, phone });

      return {
        id,
        name,
        phone,
      };
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
//to test getContactsFail => getContacts(true);

// msg to mentor - below is other ver of code for learning purposes only, pls ignore it :]
/*ver1
import {
  getContactsAction,
  getContactsSuccess,
  getContactsFail,
} from './contacts.slice';

export const fetchContactsThunk = () => async (dispatch, getState) => {
  dispatch(getContactsAction());
  try {
    const contacts = await getContacts(false);
    console.log(contacts);
    dispatch(getContactsSuccess(contacts));
  } catch (e) {
    dispatch(getContactsFail('There was a problem while fetching'));
    throw new Error('Cant fetch contacts!');
  }
}; */
