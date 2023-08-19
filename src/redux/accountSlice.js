import { createSlice } from "@reduxjs/toolkit";
import { TestAvatar } from "../../public/png";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    settings: {
      avatar: null, //проверить подставив вместо null -> TestAvatar
    },
  },
});

export const accountReducer = accountSlice.reducer;