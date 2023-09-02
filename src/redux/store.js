import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { accountReducer } from './accountSlice';
import { mainReducer } from './mainPageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    account: accountReducer,
    main: mainReducer,
  },
});
