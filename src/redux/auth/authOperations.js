import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://task-pro-backend-4y7p.onrender.com/api-docs/';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const unsetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/register', userData);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', userData);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      unsetToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);