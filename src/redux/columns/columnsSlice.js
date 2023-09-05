import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addColumn, deleteColumn, editColumn } from './columnsOperations';
import { toast } from 'react-toastify';

const customArr = [addColumn, deleteColumn, editColumn];

const fnStatus = status => {
  return customArr.map(el => el[status]);
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  toast.error('Something went wrong. Please try again. 😐');
  state.isLoading = false;
  state.error = action.payload;
};

const columnsInitialState = {
  column: [],
  isLoading: false,
  error: null,
  columnsLength: 0,
};

const columnsSlice = createSlice({
  name: 'columns',
  initialState: columnsInitialState,

  extraReducers: builder => {
    builder
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.column.push({ ...action.payload });
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.column.findIndex(
          item => item._id === action.payload
        );

        state.column.splice(index, 1);
        state.columnsLength = state.column.length;
      })

      .addCase(editColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.column.findIndex(
          item => item._id === action.payload
        );

        state.column[index] = action.payload;
      })
      .addMatcher(isAnyOf(...fnStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...fnStatus('rejected')), handleRejected);
  },
});

export const columnsReducer = columnsSlice.reducer;
