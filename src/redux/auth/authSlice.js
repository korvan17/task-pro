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
import { toast } from 'react-toastify';
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
  toast.error(
    'Something went wrong with your authentication. Please try again. 🤷‍♀️'
  );
  state.error = action.payload;
  state.isRefreshing = false;
  state.token = '';
  state.isLoggedIn = false;
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
  email: '',
  comment: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,

  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        toast.success('Registration completed successfully. Welcome! 👌');
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        toast.success('Glad to have you back. Successful login! 🤩');
        state.user = payload.user;
        state.user.avatarURL = payload.user.avatar;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, state => {
        toast.info('Logout successful. We hope to see you back soon! 😭💙');
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
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(needHelp.fulfilled, (state, { payload }) => {
        toast.info('Message sent successfully! 👌');
        state.isRefreshing = false;
        state.email = payload.email;
        state.comment = payload.comment;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.password = payload.password;
        state.user.avatarURL = payload.avatar;
        state.isRefreshing = false;
      })

      .addMatcher(isAnyOf(...fnStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...fnStatus('rejected')), handleRejected),
});

export const authReducer = authSlice.reducer;
