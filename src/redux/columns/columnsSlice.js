import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addColumn, deleteColumn, editColumn } from './columnsOperations';

const customArr = [addColumn, deleteColumn, editColumn];

const fnStatus = status => {
  return customArr.map(el => el[status]);
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const columnsInitialState = {
  column: [],
  isLoading: false,
  error: null,
  columnsLength: 0,
  currentBg: '',
  currentName: '',
  selectedPriority: 'show all',
};

const columnsSlice = createSlice({
  name: 'columns',
  initialState: columnsInitialState,
  reducers: {
    selectPriority(state, action) {
      state.selectedPriority = action.payload;
    },
  },
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
          item => item._id === action.payload._id
        );

        state.column.splice(index, 1);
        state.columnsLength = state.column.length;
      })

      .addCase(editColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const { _id, title } = action.payload;

        const columnIndex = state.column.findIndex(
          item => item._id === _id
        );

        state.column[columnIndex].title = title;
      })
      .addMatcher(isAnyOf(...fnStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...fnStatus('rejected')), handleRejected);
  },
});

export const { selectPriority } = columnsSlice.actions;

export const columnsReducer = columnsSlice.reducer;
