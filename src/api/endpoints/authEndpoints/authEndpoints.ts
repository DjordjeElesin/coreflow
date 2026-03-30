import type { TUser } from "@/types/types";
import { baseApi } from "../../baseApi";
import { onGetMeStarted, onLoginStarted } from "./authEndpointHandlers";

export type TLoginRequest = { username: string; password: string };
export type TLoginResponse = TUser & {
  accessToken: string;
  refreshToken: string;
};

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<TLoginResponse, TLoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: {
          ...credentials,
          expiresInMins: 1, // 2 days
        },
      }),

      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        onLoginStarted({ dispatch, queryFulfilled });
      },
    }),
    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: "/auth/refresh",
        method: "POST",
        body: { refreshToken, expiresInMins: 2900 },
      }),
    }),
    getMe: builder.query<TUser, void>({
      query: () => ({ url: "/auth/me" }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        onGetMeStarted({ dispatch, queryFulfilled });
      },
    }),
  }),
});

export const { useGetMeQuery, useLoginMutation, useRefreshTokenMutation } =
  userApi;
