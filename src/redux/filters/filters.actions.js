import { createAction } from '@reduxjs/toolkit';

export const setNameFilterAction = createAction(
  'filters/setNameFilter',
  name => ({ payload: { name } })
);
