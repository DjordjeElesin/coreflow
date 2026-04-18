import { baseApi } from "@/api/baseApi";
import type { TProduct } from "@/types/types";
import { onUpdateStockStarted } from "./inventoryEndpointHandlers";

export type TGetInventoryParams = {
  search: string | null;
  sortBy?: string;
};

type TUpdateStockParams = {
  productId: number;
  stock: number;
};

export type TInventoryResponse = {
  products: TProduct[];
  total: number;
  skip: number;
  limit: number;
};

export const inventoryEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getInventory: builder.query<TInventoryResponse, TGetInventoryParams>({
      query: ({ search, sortBy }) => {
        const params = new URLSearchParams({
          limit: "0",
          sortBy: sortBy ?? "title",
          ...(search && { q: search }),
        });
        return { url: `/products/search?${params}` };
      },
    }),
    updateStock: builder.mutation<TProduct, TUpdateStockParams>({
      query: ({ productId, stock }) => ({
        url: `/products/${productId}`,
        method: "PATCH",
        body: { stock },
      }),
      async onQueryStarted(
        { productId, stock },
        { dispatch, queryFulfilled, getState },
      ) {
        onUpdateStockStarted(
          { productId, stock },
          { dispatch, queryFulfilled, getState },
        );
      },
    }),
    getProductById: builder.query<TProduct, { id?: string }>({
      query: ({ id }) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const {
  useGetInventoryQuery,
  useUpdateStockMutation,
  useGetProductByIdQuery,
} = inventoryEndpoints;
