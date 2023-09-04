import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  updateTheme,
  refreshUser,
  needHelp,
  updateUser,
} from './authOperations';
const customArr = [
  register,
  login,
  logout,
  updateTheme,
  refreshUser,
  needHelp,
  updateUser,
];

const fnStatus = status => {
  return customArr.map(el => el[status]);
};

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isRefreshing = false;
};
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
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user.email = '';
        state.user.name = '';
        state.user.avatarURL = '';
        state.user.theme = '';
        state.token = '';
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(updateTheme.fulfilled, (state, { payload }) => {
        state.user.theme = payload.theme;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        console.log(payload);
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(needHelp.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.replyEmail = payload.replyEmail;
        state.comment = payload.comment;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.password = payload.password;
        state.user.avatarURL = payload.avatarURL;
        state.isRefreshing = false;
      })

      .addMatcher(isAnyOf(...fnStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...fnStatus('rejected')), handleRejected),
});

export const { setAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
