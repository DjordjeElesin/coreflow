import type { TUser } from "@/types/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TAuthState = {
  token: string | null;
  user: TUser | null;
  isInitializing: boolean;
  isFetchingUser: boolean;
};

const initialState: TAuthState = {
  token: localStorage.getItem("token"),
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
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, setUser, setInitialized, setFetchingUser, logout } =
  authSlice.actions;
