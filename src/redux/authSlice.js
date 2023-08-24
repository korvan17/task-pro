import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
  status: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setAuth(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const getStatusAuth = state => state.auth.status;
