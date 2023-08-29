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
  currentDashboard: {},
  isLoading: false,
  error: null,
  columnsLength: 0,
  currentBg: '',
  currentName: '',
  selectedPriority: 'show all',
};

const columnsSlice = createSlice({
  name: 'columns',
  columnsInitialState,
  reducers: {
    selectPriority(state, action) {
      state.selectedPriority = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fnStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...fnStatus('rejected')), handleRejected)
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentDashboard.columns.push(action.payload);
        state.error = null;
        state.columnsLength = state.currentDashboard.columns.length;
      })

      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.currentDashboard.columns.findIndex(
          item => item._id === action.payload._id
        );

        state.currentDashboard.columns.splice(index, 1);
        state.columnsLength = state.currentDashboard.columns.length;
      })

      .addCase(editColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const { _id, title } = action.payload;

        const columnIndex = state.currentDashboard.columns.findIndex(
          item => item._id === _id
        );

        state.currentDashboard.columns[columnIndex].title = title;
      });
  },
});

export const { selectPriority } = columnsSlice.actions;

export const columnsReducer = columnsSlice.reducer;
