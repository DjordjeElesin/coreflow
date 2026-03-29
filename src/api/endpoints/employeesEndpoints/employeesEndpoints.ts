import { baseApi } from "@/api/baseApi";
import type { TUserResponse } from "@/types/types";

type TGetEmployeesParams = {
  limit: number;
  skip: number;
  search: string | null;
  sortBy?: string;
  order: string;
};

const employeesEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<TUserResponse, TGetEmployeesParams>({
      query: ({ limit, skip, search, sortBy, order }) => {
        const params = new URLSearchParams({
          limit: String(limit),
          skip: String(skip),
          sortBy: sortBy ?? "id",
          order,
          ...(search && { search }),
        });
        return { url: `/users?${params}` };
      },
    }),
  }),
});

export const { useGetEmployeesQuery } = employeesEndpoints;
