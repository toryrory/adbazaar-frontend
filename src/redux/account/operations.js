import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:8080";
// const renderURL = 'https://adbazaar-spring-backend.onrender.com';
// const localhostURL = 'http://localhost:8080';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};


export const addBook = createAsyncThunk(
  "account/addBook",
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = state.auth.user.id;

    try {
      const response = await axios.patch(`/users/${userId}/books`, credentials);
      console.log("updateUser:", state);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);