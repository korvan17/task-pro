import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchBoards,
  addBoard,
  deleteBoard,
  updateBoardById,
  getBoardByID,
} from './operations';
import { toast } from 'react-toastify';

const customArr = [
  updateBoardById,
  deleteBoard,
  addBoard,
  fetchBoards,
  getBoardByID,
];

const fnStatus = status => {
  return customArr.map(el => el[status]);
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const boardsInitialState = {
  boards: [],
  isLoading: false,
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
        toast.error('Board successfully removed from your account. 😟');
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
        state.error = null;
        const index = state.boards.findIndex(
          board => board._id === action.payload
        );

        state.boards[index] = action.payload;
      })

      .addCase(getBoardByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentBoard = action.payload;
      })

      .addMatcher(isAnyOf(...fnStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...fnStatus('rejected')), handleRejected),
});

export const { selectBoard } = boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;
