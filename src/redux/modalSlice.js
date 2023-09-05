import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalDisplayed: false,
    columnId: '',
    cardId: '',
  },
  reducers: {
    setModalStatus(state, action) {
      state.isModalDisplayed = action.payload;
    },
    setColumnId(state, action) {
      state.columnId = action.payload;
    },
    setCardId(state, action) {
      state.cardId = action.payload;
    },
  },
});

export const { setModalStatus, setColumnId, setCardId } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;

export const selectModalStatus = state => state.modal.isModalDisplayed;
