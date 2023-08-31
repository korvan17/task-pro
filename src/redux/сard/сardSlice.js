import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addCard, deleteCard, editCard, moveCard } from './сardOperations';
const customArr = [addCard, deleteCard, editCard, moveCard];

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

const cardsInitialState = {
  cards: [],
  isLoading: false,
  error: null,
  columnsLength: 0,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState: cardsInitialState,

  extraReducers: builder => {
    builder
      .addCase(addCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cards.push({ ...action.payload });
      })

      .addCase(deleteCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.cards.findIndex(
          item => item._id === action.payload._id
        );
        state.cards.splice(index, 1);
      })
      .addCase(editCard.fulfilled, (state, action) => {
        const updatedCardIndex = state.cards.findIndex(
          card => card._id === action.payload._id
        );
        if (updatedCardIndex !== -1) {
          state.cards[updatedCardIndex] = action.payload;
        }
      })
      .addCase(moveCard.fulfilled, (state, action) => {
        const updatedCardIndex = state.cards.findIndex(
          card => card._id === action.payload._id
        );
        if (updatedCardIndex !== -1) {
          state.cards[updatedCardIndex].column = action.payload.column;
        }
      })
      .addMatcher(isAnyOf(...fnStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...fnStatus('rejected')), handleRejected);
  },
});

// export const {  } = cardsSlice.actions;

export const cardsReducer = cardsSlice.reducer;
