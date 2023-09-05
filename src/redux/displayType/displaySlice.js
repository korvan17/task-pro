import { createSlice } from '@reduxjs/toolkit';
import { sendDisplayTypeToBackend } from './operationDisplayType';

const displayInitialState = {
  status: '',
  displays: '',
};

const displaySlice = createSlice({
  name: 'displays',
  initialState: displayInitialState,
  extraReducers: builder => {
    builder.addCase(sendDisplayTypeToBackend.fulfilled, (state, action) => {
      state.displays = action.payload;
    });
  },
});

export const displayReducer = displaySlice.reducer;
