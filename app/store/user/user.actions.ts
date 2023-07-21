import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorCatch } from "@/app/utils/api/api.helper";
import { IAuthResponse, IAuthUserData, IEmailPassword } from "./user.interface";
import { removeFromStorage } from "@/app/services/auth/auth.helper";
import { AuthService } from "@/app/services/auth/auth.service";

// register
export const register = createAsyncThunk<IAuthResponse, IAuthUserData>(
  "auth/register",
  async (data, thunkApi) => {
    try {
      const response = await AuthService.main("register", data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

// login
export const login = createAsyncThunk<IAuthResponse, IAuthUserData>(
  "auth/login",
  async (data, thunkApi) => {
    try {
      const response = await AuthService.main("login", data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

// logout
export const logout = createAsyncThunk("auth/logout", async () =>
  removeFromStorage()
);

// check auth
export const checkAuth = createAsyncThunk<IAuthResponse | any>(
  "auth/check-auth",
  async (_, thunkApi) => {
    try {
      const response = await AuthService.getNewTokens();
      return response.user;
    } catch (error) {
      if (errorCatch(error) === "jwt expired") {
        thunkApi.dispatch(logout());
      }
      return thunkApi.rejectWithValue(error);
    }
  }
);
