import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addCard, deleteCard } from './сardOperations';
const customArr = [addCard, deleteCard];

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
  currentDashboard: {},
  isLoading: false,
  error: null,
  columnsLength: 0,
};

const cardsSlice = createSlice({
  name: 'cards',
  cardsInitialState,

  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fnStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...fnStatus('rejected')), handleRejected)

      .addCase(addCard.fulfilled, (state, action) => {
        state.isLoading = false;

        const index = state.currentDashboard.columns.findIndex(
          item => item._id === action.payload.owner
        );

        if (!state.currentDashboard.columns[index].cards) {
          state.currentDashboard.columns[index].cards = [];
        }

        state.currentDashboard.columns[index].cards.push(action.payload);

        state.error = null;
      })

      .addCase(deleteCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const indexColumn = state.currentDashboard.columns.findIndex(
          item => item._id === action.payload.owner
        );

        const indexCard = state.currentDashboard.columns[
          indexColumn
        ].cards.findIndex(item => item._id === action.payload._id);

        state.currentDashboard.columns[indexColumn].cards.splice(indexCard, 1);
        state.columnsLength = state.currentDashboard.columns.length;
      });
  },
});

// export const {  } = cardsSlice.actions;

export const cardsReducer = cardsSlice.reducer;
