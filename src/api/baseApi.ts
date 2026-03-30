import { logout, setRefreshToken, setToken } from "@/store/auth/authReducer";
import type { RootState } from "@/store/store";
import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const API_URLS = {
  dummyjson: import.meta.env.VITE_DUMMYJSON_URL,
  jsonplaceholder: import.meta.env.VITE_JSONPLACEHOLDER_URL,
  frankfurter: import.meta.env.VITE_FRANKFURTER_URL,
  alphavantage: import.meta.env.VITE_ALPHAVANTAGE_URL,
};

type ApiTarget = keyof typeof API_URLS;

export type CustomFetchArgs = FetchArgs & { target?: ApiTarget };

const customBaseQuery: BaseQueryFn<
  CustomFetchArgs,
  unknown,
  FetchBaseQueryError
> = (args, api, extraOptions) => {
  const target: ApiTarget = args.target ?? "dummyjson";
  const baseUrl = API_URLS[target];
  return fetchBaseQuery({
    baseUrl,

    prepareHeaders: (headers, { getState }) => {
      const token =
        (getState() as RootState).auth.token ?? localStorage.getItem("token");
      if (token && target === "dummyjson") {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  })(args, api, extraOptions);
};

const customBaseQueryWithReauth: BaseQueryFn<
  CustomFetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await customBaseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refreshToken = (api.getState() as RootState).auth.refreshToken;
    const refreshResult = await customBaseQuery(
      {
        url: "/auth/refresh",
        method: "POST",
        body: { refreshToken, expiresInMins: 2900 },
      },
      api,
      extraOptions,
    );

    const refreshData = refreshResult.data as {
      accessToken: string;
      refreshToken: string;
    };

    if (refreshData) {
      api.dispatch(setToken(refreshData.accessToken));
      api.dispatch(setRefreshToken(refreshData.refreshToken));

      result = await customBaseQuery(args, api, extraOptions);
    } else api.dispatch(logout());
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: customBaseQueryWithReauth,
  tagTypes: ["Auth", "Customer", "Dashboard", "Employee", "Product"],
  endpoints: () => ({}),
});
