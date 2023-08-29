import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  updateTheme,
  refreshUser,
  needHelp,
  updateUser,
} from './authOperations';

const authInitialState = {
  user: {
    email: '',
    name: '',
    avatarURL: '',
    theme: 'dark',
    password: '',
    displays: '',
  },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  replyEmail: '',
  comment: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,

  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefreshing = false;
      })
      .addCase(login.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefreshing = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logout.pending, state => {
        state.isRefreshing = true;
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
      })
      .addCase(updateTheme.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateTheme.fulfilled, (state, { payload }) => {
        state.user.theme = payload.theme;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(needHelp.rejected, state => {
        state.isRefreshing = false;
        state.error = true;
      })
      .addCase(needHelp.pending, state => {
        state.isRefreshing = true;
        state.error = false;
      })
      .addCase(needHelp.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.replyEmail = payload.replyEmail;
        state.comment = payload.comment;
      })
      .addCase(updateUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.password = payload.password;
        state.user.avatarURL = payload.avatarURL;
        state.isRefreshing = false;
      }),
});

export const { setAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
