import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBoards,
  addBoard,
  deleteBoard,
  updateBoardById,
  updateBoardBgById,
<<<<<<< Updated upstream
} from './operations';
=======
} from '../boards/operations';
>>>>>>> Stashed changes

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentBoard: null,
    filter: null,
  },
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
        state.items = action.payload;
      })
      .addCase(fetchBoards.pending, handlePending)
      .addCase(fetchBoards.rejected, handleRejected)
      .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
<<<<<<< Updated upstream
=======
        state.items.push({ ...action.payload });
>>>>>>> Stashed changes
      })
      .addCase(addBoard.pending, handlePending)
      .addCase(addBoard.rejected, handleRejected)
      .addCase(updateBoardById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          board => board._id === action.payload._id
        );

        state.items[index] = action.payload;
      })
      .addCase(updateBoardById.pending, handlePending)
      .addCase(updateBoardById.rejected, handleRejected)
      .addCase(updateBoardBgById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          board => board._id === action.payload._id
        );

        state.items[index].background = action.payload.background;
      })
      .addCase(updateBoardBgById.pending, handlePending)
      .addCase(updateBoardBgById.rejected, handleRejected)
      .addCase(deleteBoard.pending, handlePending)
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          board => board._id === action.payload
        );
        state.items.splice(index, 1);
        if (state.items.length === 0) {
          state.currentBoard = null;
        } else {
          state.currentBoard = 0;
        }
      })
      .addCase(deleteBoard.rejected, handleRejected),
});

<<<<<<< Updated upstream
export const { selectBoard, setFilter } = boardsSlice.actions;
=======
export const { selectBoard } = boardsSlice.actions;
>>>>>>> Stashed changes
export const boardsReducer = boardsSlice.reducer;
