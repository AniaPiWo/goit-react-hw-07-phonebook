import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from 'components/api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (arg, thunkAPI) => {
    try {
      const response = await getContacts(false);
      const { contacts } = response;
      console.log(contacts);
      return response.contacts;
    } catch (e) {
      throw new Error('Cant fetch contacts!');
      return thunkAPI.rejectWithValue('There was a problem while fetching');
    }
  }
);

export const deleteSelectedContact = createAsyncThunk(
  'contacts/addContact',
  async (id, thunkAPI) => {
    try {
      const response = await deleteSelectedContact(id);
      return response;
    } catch (e) {
      throw new Error('Cant add contact!');
      //return rejectWithValue('There was a problem while deleting task');
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
