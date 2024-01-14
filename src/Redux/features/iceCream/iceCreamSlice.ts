import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

const initialState = {
  numbeOfIceCream: 10,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordred: (state) => {
      state.numbeOfIceCream -= 1;
    },
    reStocked: (state, action) => {
      state.numbeOfIceCream += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numbeOfIceCream -= 1;
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numbeOfIceCream -= 1;
    });
  },
});

export const iceCreamReducer = iceCreamSlice.reducer;

export const iceCreamAction = iceCreamSlice.actions;
