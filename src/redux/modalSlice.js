import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalDisplayed: false,
    columnId: '',
    newBoardCreate: false,
  },
  reducers: {
    setModalStatus(state, action) {
      state.isModalDisplayed = action.payload;
    },
    setColumnId(state, action) {
      state.columnId = action.payload;
    },
    setNewBoardCreate(state, action) {
      state.columnId = action.payload;
    },
  },
});

export const { setModalStatus, setColumnId, setNewBoardCreate } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;

export const selectModalStatus = state => state.modal.isModalDisplayed;
