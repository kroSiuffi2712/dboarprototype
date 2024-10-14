import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IAuthResponse,
  ICredentials,
} from "../types/interfaces/auth.interface";
import { login } from "../api/auth";
import { Status } from "../types/enum/status.enum";
import { initialState } from "../data/initialState/auth";

export const fetchLogin = createAsyncThunk<IAuthResponse, ICredentials>(
  "auth/fetchLogin",
  async (credentials) => {
    const response = await login(credentials);
    return response;
  }
);

const authenticationSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.data = initialState.data;
      state.status = initialState.status;
      state.error = initialState.error;
      localStorage.removeItem('token');
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = Status.loading;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = Status.succeeded;
        state.data = { ...action.payload.user, isAuthenticated: true };
        state.error = initialState.error;
        localStorage.setItem("token", action.payload.user.token);
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.data = initialState.data;
        state.status = Status.failed;
        state.error = {
          success: false,
          message: action.error.message || "Login failed",
        };
      });
  },
});

export const { logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
