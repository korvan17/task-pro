import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  status: '',
  filter: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const getStatusFilter = state => state.filters.status;
export const selectFilter = state => state.filters.filter;
