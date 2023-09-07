import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    showStars: true,
    subscription: false,
    },
    reducers: {
        changeStarVisibility: {
            reducer(state, action) {
                state.showStars = action.payload;
          }
      },
      changeSubscription: {
        reducer(state, action) {
          state.subscription = action.payload;
        }
      }
  }
});
export const { changeStarVisibility, changeSubscription } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
