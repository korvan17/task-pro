import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

<<<<<<< Updated upstream
/*
 * GET @ /boards
 * headers: Authorization: Bearer token
 */
=======
//  GET @ /boards

>>>>>>> Stashed changes
export const fetchBoards = createAsyncThunk(
  'boards/fetchBoards',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/boards');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

<<<<<<< Updated upstream
/*
 * POST @ /boards
 * headers: Authorization: Bearer token
 */
=======
// POST @ /boards
>>>>>>> Stashed changes
export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (body, thunkAPI) => {
    try {
      const response = await axios.post('/boards', { ...body });
      return { ...body, ...response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PUT @ /boards
<<<<<<< Updated upstream
 * headers: Authorization: Bearer token
=======

>>>>>>> Stashed changes
 */
export const updateBoardById = createAsyncThunk(
  'boards/updateBoardById',
  async (board, thunkAPI) => {
    const { _id, title, icon, background } = board;

    try {
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

/*
 * PATCH @ /boards
<<<<<<< Updated upstream
 * headers: Authorization: Bearer token
=======

>>>>>>> Stashed changes
 */
export const updateBoardBgById = createAsyncThunk(
  'boards/updateBoardBgById',
  async (board, thunkAPI) => {
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

/*
 * DELETE @ /boards/:id
<<<<<<< Updated upstream
 * headers: Authorization: Bearer token
=======

>>>>>>> Stashed changes
 */
export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (_id, thunkAPI) => {
    try {
      await axios.delete(`/boards/${_id}`);
      return _id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

<<<<<<< Updated upstream
/*
 * GET @ /boards/:id
 * headers: Authorization: Bearer token
 */
=======
//  GET @ /boards/:id
>>>>>>> Stashed changes

export const getBoard = createAsyncThunk(
  'boards/getBoard',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/boards/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
