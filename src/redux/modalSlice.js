import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalDisplayed: false,
    columnId: '',
  },
  reducers: {
    setModalStatus(state, action) {
      state.isModalDisplayed = action.payload;
    },
    setColumnId(state, action) {
      state.columnId = action.payload;
    },
  },
});

export const { setModalStatus, setColumnId } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

export const selectModalStatus = state => state.modal.isModalDisplayed;

// export const selectColumnId = state => state.modal.columnId;
// // Дії пов'язані з модальними вікнами
// export const performActionOnModalStatusChange = (newStatus) => (dispatch, getState) => {
//   const currentStatus = selectModalStatus(getState());

//   if (currentStatus !== newStatus) {
//     // Виконати деякі дії, коли статус модального вікна змінюється
//     dispatch(setModalStatus(newStatus)); // Змінити статус модального вікна
//     // Виконати додаткові дії за потреби
//   }
// };
