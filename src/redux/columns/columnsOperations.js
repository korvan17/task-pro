import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-4y7p.onrender.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async ({ board, title }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      const response = await axios.post('/columns', { board, title });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      const { data } = await axios.delete(`/columns/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'dashboards/editColumn',
  async ({ id, title }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      const { data } = await axios.put(`/columns/${id}`, { title });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
