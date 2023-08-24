import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  status: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const getStatusFilter = state => state.filters.status;
