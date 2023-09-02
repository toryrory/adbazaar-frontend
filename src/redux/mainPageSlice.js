import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    showStars: true,
    },
    reducers: {
        changeStarVisibility: {
            reducer(state, action) {
                state.showStars = action.payload;
          }
      }
  }
});
export const { changeStarVisibility } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
