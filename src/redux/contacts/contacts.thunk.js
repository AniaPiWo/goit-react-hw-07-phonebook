import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://640b422d81d8a32198df1101.mockapi.io/';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (arg, thunkAPI) => {
    console.log('thunkAPI:', thunkAPI);
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (e) {
      throw new Error('Cant fetch contacts!');
    }
  }
);

export const deleteSelectedContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);

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
      await axios.post('/contacts', { id, name, phone });

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
