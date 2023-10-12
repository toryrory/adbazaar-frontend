import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { googleLogout } from '@react-oauth/google';

axios.defaults.baseURL = 'http://localhost:8080';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const authRegister = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        `/authentication/register`,
        credentials
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/authentication/login`, credentials);
      token.set(response.data.access_token);
      // token.set(response.data.refresh_token);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (refreshToken, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentToken = state.auth.token;
    token.set(currentToken);

    try {
      const response = await axios.post(
        `/authentication/token/revoke`,
        refreshToken
      );
      token.unset();
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const googleLogin = createAsyncThunk(
  'auth/googleLogin',
  async (googleToken, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleToken}`,
        {
          headers: {
            Authorization: `Bearer ${googleToken}`,
            Accept: 'application/json',
          },
        }
      );
      console.log(response.data, googleToken);
      // token.set(googleToken);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const googleLogOut = createAsyncThunk(
  'auth/googleLogOut',
  async (_, thunkAPI) => {
    try {
      const response = await googleLogout();
      // token.unset();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const verification = createAsyncThunk(
  'auth/verification',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        `/authentication/verification`,
        credentials
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const resendVerification = createAsyncThunk(
  'auth/resendVerification',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        `/authentication/verification/resend`,
        credentials
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  '/auth/password-reset',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        `authentication/password-reset`,
        credentials
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentToken = state.auth.token;
    const refreshToken = state.auth.refreshToken;

    if (currentToken === null) {
      return;
    } else {
      token.set(currentToken);

      try {
        const response = await axios.get(`/users/token`);
        console.log(response.data);
        return response.data;
      } catch (e) {
        // console.log(`current: ${currentToken},refresh: ${refreshToken}`);
        refreshAccessToken({ refresh_token: refreshToken });
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  }
);

export const refreshAccessToken = createAsyncThunk(
  'auth/refreshToken',
  async (refreshToken, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const refreshToken = state.auth.refreshToken;
    // const state = thunkAPI.getState();
    // const currentToken = state.auth.token;
    // token.set(currentToken);

    try {
      const response = await axios.post(
        `/authentication/token/refresh`,
        refreshToken
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const fetchBooks = createAsyncThunk(
//   'books/fetch',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const currentToken = state.auth.token;

//     if (currentToken === null) {
//       return;
//     } else {
//       token.set(currentToken);

//       try {
//         const response = await axios.get(`/users/token`);
//         console.log(response.data);
//         return response.data;
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//       }
//     }
//   }
// );
