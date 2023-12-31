import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { googleLogout } from '@react-oauth/google';

axios.defaults.baseURL = "https://adbazaar-spring-backend.onrender.com";
// const renderURL = 'https://adbazaar-spring-backend.onrender.com';
// const localhostURL = 'http://localhost:8080';

//  "email": "test.verif@gmail.com",
//  "password": "J@v@rd1kk"

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
      console.log(`register:`, response.data);
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
      console.log(`login:`, response.data);
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
      console.log(`logout:`, response.data);
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
      console.log(`google login:`, response.data, `google token:`, googleToken);
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
      console.log(`verification:`, response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const resendVerification = createAsyncThunk(
  'auth/resendVerification',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const response = await axios.post(
        `/authentication/verification/resend?email=${credentials.email}`
      );
      console.log(`verification resend:`, response.data);
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
        `/authentication/password-reset`,
        credentials
      );
      console.log(`password reset:`, response.data);
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
    if (currentToken === null) {
      return;
    } else {
      token.set(currentToken);
      try {
        const response = await axios.get(`/users/token`);
        console.log(`fetch current user:`, response.data);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  }
);

export const refreshAccessToken = createAsyncThunk(
  'auth/refreshToken',
  async (credentials, thunkAPI) => {
    token.unset();
    try {
      const response = await axios.post(
        `/authentication/token/refresh`,
        credentials
      );
      console.log(`refresh access token:`, response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFavorites = createAsyncThunk(
  'auth/addFavorites',
  async (bookId, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentUserId = state.auth.user.id;

    try {
      const response = await axios.post(
        `/users/${currentUserId}/favorites?bookId=${bookId}`
      );
      console.log(`addFavorites:`, response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFavorites = createAsyncThunk(
  'auth/deleteFavorites',
  async (bookId, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentUserId = state.auth.user.id;

    try {
      const response = await axios.delete(
        `/users/${currentUserId}/favorites?bookId=${bookId}`
      );
      console.log(`deleteFavorites:`, response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addCart = createAsyncThunk(
  'auth/addCart',
  async (bookId, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentUserId = state.auth.user.id;

    try {
      const response = await axios.post(
        `/users/${currentUserId}/orders?bookId=${bookId}`
      );
      console.log(`addCart:`, response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCart = createAsyncThunk(
  'auth/deleteCart',
  async (bookId, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentUserId = state.auth.user.id;

    try {
      const response = await axios.delete(
        `/users/${currentUserId}/orders?bookId=${bookId}`
      );
      console.log(`deleteCart:`, response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = state.auth.user.id;

    try {
      const response = await axios.patch(`/users/${userId}`, credentials);

      console.log('updateUser:', state);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const updateUserAvatar = createAsyncThunk(
  'auth/updateUserAvatar',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = state.auth.user.id;
    const headers = {
      'Content-Type': 'multipart/form-data',
    };
    try {
      const response = await axios.patch(
        `/users/${userId}/avatar`,
        credentials,
        { headers: headers }
      );
      console.log('updateUserAvatar:', state);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteUserBook = createAsyncThunk(
  'auth/deleteUserBook',
  async (bookId, thunkAPI) => {
    const state = thunkAPI.getState();
    const UserId = state.auth.user.id;

    try {
      const response = await axios.delete(`/users/${UserId}/books/${bookId}`);
      console.log(`deleteCart:`, response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addBook = createAsyncThunk(
  'auth/addBook',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = state.auth.user.id;
    const headers = {
      'Content-Type': 'multipart/form-data',
    };

    try {
      const response = await axios.post(`/users/${userId}/books`, credentials, {
        headers: headers,
      });
      console.log('addBook:', state);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
