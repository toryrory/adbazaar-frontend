import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { googleLogout } from '@react-oauth/google';

const initialCode = '1111';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
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
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(`/authentication/token/revoke`);
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
      console.log(response.data);
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

// export const authRegister = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post(`/users/signup`, credentials);
//       console.log(response);
//       token.set(response.data.token);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const authLogin = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post(`/users/login`, credentials);
//       token.set(response.data.token);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const authLogout = createAsyncThunk(
//   'auth/logout',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.post(`/users/logout`);
//       token.unset();
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const verification = createAsyncThunk(
//   'auth/verification',
//   async (value, thunkApi) => {
//     if (JSON.stringify(initialCode) === JSON.stringify(value)) {
//       return true;
//     } else {
//       return thunkApi.rejectWithValue('code wrong');
//     }
//   }
// );
