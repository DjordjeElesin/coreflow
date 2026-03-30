import { baseApi } from "@/api/baseApi";
import type { TUserResponse } from "@/types/types";

type TGetEmployeesParams = {
  search: string | null;
  sortBy?: string;
};

const employeesEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<TUserResponse, TGetEmployeesParams>({
      query: ({ search, sortBy }) => {
        const params = new URLSearchParams({
          limit: "0",
          sortBy: sortBy ?? "firstName",
          ...(search && { q: search }),
        });
        return { url: `/users/search?${params}` };
      },
    }),
  }),
});

export const { useGetEmployeesQuery } = employeesEndpoints;
