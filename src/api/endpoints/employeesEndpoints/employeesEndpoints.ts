import { baseApi } from "@/api/baseApi";
import type { TTask, TUser, TUserResponse } from "@/types/types";

type TGetEmployeesParams = {
  search: string | null;
  sortBy?: string;
};

export type TTasksResponse = {
  todos: TTask[];
  total: number;
  skip: number;
  limit: number;
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
    getEmployeeById: builder.query<TUser, { id?: string }>({
      query: ({ id }) => ({ url: `/users/${id}` }),
    }),
    getEmployeeTasks: builder.query<TTasksResponse, { id?: string }>({
      query: ({ id }) => ({ url: `/todos/user/${id}` }),
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useGetEmployeeTasksQuery,
} = employeesEndpoints;
