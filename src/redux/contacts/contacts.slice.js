import { createSlice } from '@reduxjs/toolkit';
import { deleteSelectedContact, fetchContactsThunk } from './contacts.thunk';

const initialContactsState = {
  isPending: false,
  error: null,
  list: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    getContactsAction(state, action) {
      state.isPending = true;
    },
    getContactsSuccess(state, action) {
      state.isPending = false;
      state.list.push(...action.payload.contacts);
    },
    getContactsFail(state, action) {
      state.isPending = false;
      state.error = action.payload;
    },
    addContactAction: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },
      prepare(id, name, phone) {
        return {
          payload: {
            id,
            name,
            phone,
          },
        };
      },
    },
  },
  extraReducers: {
    [fetchContactsThunk.pending]: (state, action) => {
      state.isPending = true;
    },
    [fetchContactsThunk.fulfilled]: (state, action) => {
      state.isPending = false;
      state.list.push(...action.payload);
    },
    [fetchContactsThunk.rejected]: (state, action) => {
      state.isPending = false;
      state.error = action.payload;
    },
    [deleteSelectedContact.pending]: (state, action) => {
      state.isPending = true;
    },
    [deleteSelectedContact.fulfilled]: (state, action) => {
      state.isPending = false;
      const id = action.payload;
      return state.list.filter(contact => contact.id !== id);
    },
    [deleteSelectedContact.rejected]: (state, action) => {
      state.isPending = false;
      state.error = action.payload;
    },
  },
});

const {
  addContactAction,
  deleteContactAction,
  getContactsAction,
  getContactsSuccess,
  getContactsFail,
} = contactsSlice.actions;
const contactsReducer = contactsSlice.reducer;

export {
  addContactAction,
  deleteContactAction,
  getContactsAction,
  getContactsSuccess,
  getContactsFail,
  contactsReducer,
};

// msg to mentor - below is other ver of code for learning purposes only, pls ignore it :]
/* ver1
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
     getContactsAction(state, action) {
      state.isPending = true;
    },
    getContactsSuccess(state, action) {
      state.isPending = false;
      state.list.push(...action.payload.contacts);
    },
    getContactsFail(state, action) {
      state.isPending = false;
      state.error = action.payload;
    }, 
    addContactAction: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },
      prepare(id, name, phone) {
        return {
          payload: {
            id,
            name,
            phone,
          },
        };
      },
    },
    deleteContactAction(state, action) {
      const id = action.payload;
      return state.list.filter(contact => contact.id !== id);
    },
  },
}); */
