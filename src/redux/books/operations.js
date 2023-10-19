import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:8080';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchBooks = createAsyncThunk(
  'books/fetch',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    // const currentToken = state.auth.token;

    // if (currentToken === null) {
    //   return;
    // } else {
    //   token.set(currentToken);

    try {
      const response = await axios.get(`/books?size=48`);
      console.log(`fetch books:`, response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
  // }
);

export const fetchBookById = createAsyncThunk(
  'books/fetchById',
  async (id, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const currentToken = state.auth.token;

    // if (currentToken === null) {
    //   return;
    // } else {
    //   token.set(currentToken);

    try {
      const response = await axios.get(`/books/${id}`);
      console.log(`fetchBookById`, response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
  // }
);
