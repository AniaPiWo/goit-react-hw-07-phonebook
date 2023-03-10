import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setNameFilterAction(state, action) {
      console.log(state);
      return (state = action.payload);
    },
  },
});

export const { setNameFilterAction } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
