import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { accountReducer } from './accountSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    account: accountReducer,
  },
});
