import { createSlice } from '@reduxjs/toolkit';
import {
  authRegister,
  authLogin,
  authLogout,
  googleLogin,
  googleLogOut,
  verification,
  resetPassword,
} from './operations';

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
    user: {
      name: null,
      email: null,
      phone: '',
      birthday: '00/00/0000',
      socials: { first: '@example', second: '@example' },
    },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    type: null,
    isVerified: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authRegister.pending, handlePending)
      .addCase(authRegister.fulfilled, (state, action) => {
        // state.user = { ...state.user, ...action.payload.user };
        // state.token = action.payload.token;
        // state.isLoggedIn = true;
        state.user = { ...state.user, email: action.payload.email };
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
        state.type = 'email';
      })
      .addCase(authRegister.rejected, handleRejected)
      .addCase(authLogin.pending, handlePending)
      .addCase(authLogin.fulfilled, (state, action) => {
        // state.user = { ...state.user, ...action.payload.user };
        state.user = {
          ...state.user,
          name: action.payload.full_name,
          email: action.payload.email,
        };
        state.token = action.payload.access_token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
        state.type = 'email';
      })
      .addCase(authLogin.rejected, handleRejected)
      .addCase(authLogout.pending, handlePending)
      .addCase(authLogout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoading = false;
        state.error = null;
        state.type = null;
      })
      .addCase(authLogout.rejected, handleRejected)
      .addCase(googleLogin.pending, handlePending)
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
        state.type = 'google';
        state.isVerified = true;
      })
      .addCase(googleLogin.rejected, handleRejected)
      .addCase(googleLogOut.pending, handlePending)
      .addCase(googleLogOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoading = false;
        state.error = null;
        state.type = null;
      })
      .addCase(googleLogOut.rejected, handleRejected)
      .addCase(verification.pending, handlePending)
      .addCase(verification.fulfilled, (state) => {
        state.isVerified = true;
      })
      .addCase(verification.rejected, (state) => {
        state.isVerified = false;
      })
      .addCase(resetPassword.rejected, handleRejected)
      .addCase(resetPassword.pending, handlePending)
      .addCase(resetPassword.fulfilled);
  },
});

export const authReducer = authSlice.reducer;
