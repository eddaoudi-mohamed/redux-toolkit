import { configureStore } from "@reduxjs/toolkit";
import { cakeReducers } from "../features/cake/cakeSlice";
import { iceCreamReducer } from "../features/iceCream/iceCreamSlice";
import { userReducer } from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    cake: cakeReducers,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddle) => getDefaultMiddle().concat(),
});

// concat accept new middleware
