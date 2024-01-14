import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCake: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCake = state.numberOfCake - 1;
    },
    reStocked: (state, action) => {
      state.numberOfCake = state.numberOfCake + action.payload;
    },
  },
});

export const cakeReducers = cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;
