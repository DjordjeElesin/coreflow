import type { TUser } from "@/types/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TAuthState = {
  token: string | null;
  refreshToken: string | null;
  user: TUser | null;
  isInitializing: boolean;
  isFetchingUser: boolean;
};

const initialState: TAuthState = {
  token: localStorage.getItem("token"),
  refreshToken: localStorage.getItem("refreshToken"),
  user: null,
  isInitializing: true,
  isFetchingUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
      localStorage.setItem("refreshToken", action.payload);
    },
    setUser: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    },
    setInitialized: (state) => {
      state.isInitializing = false;
    },
    setFetchingUser: (state, action: PayloadAction<boolean>) => {
      state.isFetchingUser = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    },
  },
});

export const {
  setToken,
  setRefreshToken,
  setUser,
  setInitialized,
  setFetchingUser,
  logout,
} = authSlice.actions;
