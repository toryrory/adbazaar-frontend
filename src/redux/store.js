import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { accountReducer } from './accountSlice';
import { mainReducer } from './mainPageSlice';
import { booksReducer } from './bookSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    account: accountReducer,
    main: mainReducer,
    books: booksReducer,
  },
});
