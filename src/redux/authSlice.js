import { createSlice } from '@reduxjs/toolkit';
import {
  authRegister,
  authLogin,
  authLogout,
  googleLogin,
  googleLogOut,
} from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
      phone: "",
      birthday: "00/00/0000",
      socials: { first: "@example", second: "@example" },
    },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    type: null,
  },
  extraReducers: {
    [authRegister.pending]: handlePending,
    [authRegister.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
      state.type = "email";
    },
    [authRegister.rejected]: handleRejected,
    [authLogin.pending]: handlePending,
    [authLogin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
      state.type = "email";
    },
    [authLogin.rejected]: handleRejected,
    [authLogout.pending]: handlePending,
    [authLogout.fulfilled](state) {
      state.isLoggedIn = false;
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoading = false;
      state.error = null;
      state.type = null;
    },
    [authLogout.rejected]: handleRejected,
    [googleLogin.pending]: handlePending,
    [googleLogin.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
      state.type = "google";
    },
    [googleLogin.rejected]: handleRejected,
    [googleLogOut.pending]: handlePending,
    [googleLogOut.fulfilled](state) {
      state.isLoggedIn = false;
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoading = false;
      state.error = null;
      state.type = null;
    },
    [googleLogOut.rejected]: handleRejected,
  },
});

export const authReducer = authSlice.reducer;
