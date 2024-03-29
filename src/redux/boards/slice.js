import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchBoards,
  addBoard,
  deleteBoard,
  updateBoardById,
  getBoardByID,
} from './operations';
import { toast } from 'react-toastify';
import { addColumn } from '../columns/columnsOperations';

const customArr = [deleteBoard, addBoard, fetchBoards, getBoardByID];

const fnStatus = status => {
  return customArr.map(el => el[status]);
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  toast.error('Something went wrong. Please try again. 😐');

  state.error = action.payload;
  state.isLoading = false;
};

const boardsInitialState = {
  boards: [],
  isLoading: false,
  isLoadingUpdate: false,
  error: null,
  currentBoard: null,
  currentBoardId: null,
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState: boardsInitialState,

  reducers: {
    selectBoard(state, action) {
      state.currentBoard = action.payload;
    },
    setCurrentBoardIdToNull(state) {
      state.currentBoardId = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = action.payload;
      })

      .addCase(addBoard.fulfilled, (state, action) => {
        toast.success('Great job! Your board has been added. 😍');
        state.isLoading = false;
        state.error = null;
        state.currentBoardId = action.payload._id;
        state.boards.unshift({ ...action.payload });
      })

      .addCase(deleteBoard.fulfilled, (state, action) => {
        toast.warning('Board successfully removed from your account. 😟');
        state.isLoading = false;
        state.error = null;
        const index = state.boards.findIndex(
          item => item._id === action.payload
        );
        state.boards.splice(index, 1);
      })

      .addCase(updateBoardById.fulfilled, (state, action) => {
        toast.success('Board updated successfully. Changes saved! 👍');
        state.isLoading = false;
        state.isLoadingUpdate = false;
        state.error = null;
        const index = state.boards.findIndex(
          board => board._id === action.payload
        );

        state.boards[index] = action.payload;
      })

      .addCase(updateBoardById.pending, state => {
        state.isLoading = true;
        state.isLoadingUpdate = true;
      })

      .addCase(updateBoardById.rejected, (state, action) => {
        toast.error('Something went wrong. Please try again. 😐');
        state.isLoading = false;
        state.isLoadingUpdate = false;
        state.error = action.payload;
      })

      .addCase(getBoardByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentBoard = action.payload;
      })

      .addCase(addColumn.pending, (state, action) => {
        console.log('state.currentBoard', state.currentBoard);
        console.log('action.payload', action.payload);
      })

      .addMatcher(isAnyOf(...fnStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...fnStatus('rejected')), handleRejected),
});

export const { selectBoard, setCurrentBoardIdToNull } = boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;
