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
          item => item._id === action.payload
        );
        state.cards.splice(index, 1);
      })
      .addCase(editCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.cards.findIndex(
          item => item._id === action.payload
        );

        state.cards[index] = action.payload;
      })
      .addCase(moveCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cards.push(action.payload);
      })
      .addMatcher(isAnyOf(...fnStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...fnStatus('rejected')), handleRejected);
  },
});

export const cardsReducer = cardsSlice.reducer;
