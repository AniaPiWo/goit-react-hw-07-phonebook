import { setNameFilterAction } from './filters.actions';
import { createReducer } from '@reduxjs/toolkit';

const initialFilterState = {
  name: '',
};

export const filterReducer = createReducer(initialFilterState, {
  [setNameFilterAction]: (state, action) => {
    const { name } = action.payload;
    return { name };
  },
});

/* 
ver1
export const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case setNameFilterAction.type: {
      const { name } = action.payload;
      return { name };
    }
    default:
      return state;
  }
};
 */
