import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-4y7p.onrender.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const addCard = createAsyncThunk(
  'boards/addCard',
  async ({ _id, body }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      const response = await axios.post(`/cards/${_id}`, { ...body });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'boards/deleteCard',
  async (task, thunkAPI) => {
    const { _id } = task;
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      await axios.delete(`/cards/${_id}`);
      return task;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);