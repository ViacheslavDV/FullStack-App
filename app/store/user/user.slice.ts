import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./user.interface";
import { checkAuth, login, register } from "./user.actions";

const initialState: IUserInitialState = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        (state.isLoading = false), (state.user = action.payload.user);
      })
      .addCase(register.rejected, (state) => {
        (state.isLoading = false), (state.user = null);
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        (state.isLoading = false), (state.user = action.payload.user);
      })
      .addCase(login.rejected, (state) => {
        (state.isLoading = false), (state.user = null);
      })
      // Fix check auth !!!
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload.user;
      });
  },
});
