import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchBoards,
  addBoard,
  deleteBoard,
  updateBoardById,
  updateBoardBgById,
  getBoardByID, // Импорт этой операции
} from './operations';

const customArr = [
  updateBoardBgById,
  updateBoardById,
  deleteBoard,
  addBoard,
  fetchBoards,
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

const handlePendingGetBoardId = state => {
  state.isLoading = true;
};

const handleRejectedGetBoardById = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const boardsInitialState = {
  boards: [],
  isLoading: false,
  error: null,
  currentBoard: null,
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState: boardsInitialState,

  reducers: {
    selectBoard(state, action) {
      state.currentBoard = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards.push({ ...action.payload });
      })

      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.boards.findIndex(
          item => item._id === action.payload.deletedBoard._id
        );
        state.boards.splice(index, 1);
      })

      .addCase(updateBoardById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.boards.findIndex(
          board => board._id === action.payload._id
        );

        state.boards[index] = action.payload;
      })

      .addCase(updateBoardBgById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.boards.findIndex(
          board => board._id === action.payload
        );
        state.boards.splice(index, 1);

        if (state.boards.length === 0) {
          state.currentBoard = null;
        } else {
          state.currentBoard = 0;
        }
      })
      .addCase(getBoardByID.pending, handlePendingGetBoardId) // Добавление этого кейса
      .addCase(getBoardByID.rejected, handleRejectedGetBoardById) // Добавление этого кейса
      .addMatcher(isAnyOf(...fnStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...fnStatus('rejected')), handleRejected),
});

export const { selectBoard, setFilter } = boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;
