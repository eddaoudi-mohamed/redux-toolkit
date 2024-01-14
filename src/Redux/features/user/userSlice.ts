import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  Data: [],
  error: "",
};

// createAsyncThunk GENERATED PENDING FULFILLED , REJECTED ACTION TYPES
export const fetchUser = createAsyncThunk("user/fetchUser", () => {
  return axios.get("https://dummyjson.com/users").then((res) => res.data.users);
});
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      //   state = { ...state, loading: true };
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      //   state = { ...state, loading: true };
      state.loading = false;
      state.Data = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action: any) => {
      //   state = { ...state, loading: true };
      state.loading = false;
      state.Data = [];
      state.error = action.error.message;
    });
  },
});
export const userReducer = userSlice.reducer;
