import { createSlice } from '@reduxjs/toolkit';
import { authRegister, authLogin, authLogout } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [authRegister.pending]: handlePending,
    [authRegister.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [authRegister.rejected]: handleRejected,
    [authLogin.pending]: handlePending,
    [authLogin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
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
    },
    [authLogout.rejected]: handleRejected,
  },
});

export const authReducer = authSlice.reducer;
