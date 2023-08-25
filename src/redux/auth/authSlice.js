import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './authOperations';

const authInitialState = {
  user: {
    email: '',
    name: '',
  },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  avatarURL: '',
  theme: 'dark',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,

  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.user.email = '';
        state.user.name = '';
        state.user.avatarURL = '';
        state.user.theme = '';
        state.token = '';
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
      }),
});

export const { setAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
