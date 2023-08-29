import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-4y7p.onrender.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchBoards = createAsyncThunk(
  'boards/fetchBoards',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      const res = await axios.get('/boards');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (body, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      const response = await axios.post('/boards', { ...body });
      return { ...body, ...response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (_id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      await axios.delete(`/boards/${_id}`);
      return _id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBoardByID = createAsyncThunk(
  'boards/getBoardByID',
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      const { data } = await axios.get(`/board/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBoardBgById = createAsyncThunk(
  'boards/updateBoardBgById',
  async (board, thunkAPI) => {
    const state = thunkAPI.getState();
    setToken(state.auth.token);
    const { _id, background } = board;
    try {
      await axios.patch(`/boards/${_id}`, {
        background,
      });
      return { _id, background };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBoardById = createAsyncThunk(
  'boards/updateBoardById',
  async (board, thunkAPI) => {
    const { _id, title, icon, background } = board;

    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      await axios.put(`/boards/${_id}`, {
        title,
        icon,
        background,
      });
      return board;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBoard = createAsyncThunk(
  'boards/getBoard',
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      const res = await axios.get(`/boards/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
