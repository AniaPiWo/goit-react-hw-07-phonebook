import { createSlice } from '@reduxjs/toolkit';
import {
  addNewContact,
  deleteSelectedContact,
  fetchContactsThunk,
} from './contacts.thunk';

const initialContactsState = {
  isPending: false,
  error: null,
  list: [],
};

const handlePendingState = (state, action) => {
  state.isPending = true;
};

const handleRejectionState = (state, action) => {
  state.isPending = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,

  extraReducers: {
    [fetchContactsThunk.pending]: handlePendingState,
    [deleteSelectedContact.pending]: handlePendingState,
    [addNewContact.pending]: handlePendingState,
    [fetchContactsThunk.rejected]: handleRejectionState,
    [deleteSelectedContact.rejected]: handleRejectionState,
    [addNewContact.rejected]: handleRejectionState,
    [fetchContactsThunk.fulfilled]: (state, action) => {
      state.isPending = false;
      state.list.push(...action.payload);
    },

    [deleteSelectedContact.fulfilled]: (state, action) => {
      state.isPending = false;
      const index = state.list.findIndex(
        contacts => contacts.id === action.payload
      );
      state.list.splice(index, 1);
    },

    [addNewContact.fulfilled]: (state, action) => {
      state.isPending = false;
      state.list.push(action.payload);
    },
  },
});

const {} = contactsSlice.actions;
const contactsReducer = contactsSlice.reducer;
export { contactsReducer };

// msg to mentor - below is other ver of code for learning purposes only, pls ignore it :]
//
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
*/
