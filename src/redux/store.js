import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { accountReducer } from "./account/accountSlice";
import { mainReducer } from "./mainPageSlice";
import { booksReducer } from "./books/bookSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "refreshToken"],
};

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    account: accountReducer,
    main: mainReducer,
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
