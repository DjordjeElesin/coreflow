import type { TUser } from "@/types/types";
import { baseApi } from "../../baseApi";
import { onGetMeStarted, onLoginStarted } from "./userEndpointHandlers";

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
          expiresInMins: 1,
        },
      }),

      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        onLoginStarted({ dispatch, queryFulfilled });
      },
    }),
    getMe: builder.query<TUser, void>({
      query: () => ({ url: "/auth/me" }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        onGetMeStarted({ dispatch, queryFulfilled });
      },
    }),
  }),
});

export const { useGetMeQuery, useLoginMutation } = userApi;
