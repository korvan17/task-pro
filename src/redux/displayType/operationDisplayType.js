import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-4y7p.onrender.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const sendDisplayTypeToBackend = createAsyncThunk(
  'display/sendDisplayTypeToBackend',
  async (displayInfo, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      const response = await axios.patch('/users/display', displayInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
