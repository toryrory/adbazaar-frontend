import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://adbazaar-spring-backend.onrender.com';
// const renderURL = 'https://adbazaar-spring-backend.onrender.com';
// const localhostURL = 'http://localhost:8080';

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
    try {
      const response = await axios.get(`/books?size=48`);
      console.log(`fetch books:`, response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchBookById = createAsyncThunk(
  'books/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/books/${id}`);
      console.log(`fetchBookById`, response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addComment = createAsyncThunk(
  'books/addComment',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentUserId = state.auth.user.id;
    const bookId = credentials.bookId;

    try {
      const response = await axios.post(
        `/users/${currentUserId}/books/${bookId}/comments`,
        credentials
      );
      console.log(`addComment:`, response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
