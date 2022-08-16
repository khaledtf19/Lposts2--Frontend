import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../interfaces/utilsInterfaces";
import type { RootState } from "../store/configureStore";

const initialState: AuthState = { data: null, loading: false, error: "" };

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    return fetch("http://localhost:3000/users/me", {
      method: "GET",
      headers: {
        Authorization:
          `Bearer ${JSON.parse(
            localStorage.getItem("Lposts2__token") || ""
          )}` || "",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.message) {
        state.error = action.payload.message;
        state.data = null;
        return;
      }
      state.error = "";
      state.data = action.payload;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = null;
    });
  },
  reducers: {},
});

export const selectAuth = (state: RootState) => state.rootReducer.auth;
export const authReducer = authSlice.reducer;
