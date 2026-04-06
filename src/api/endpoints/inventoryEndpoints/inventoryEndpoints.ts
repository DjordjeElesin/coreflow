import { baseApi } from "@/api/baseApi";
import type { RootState } from "@/store/store";
import type { TProduct } from "@/types/types";

type TGetInventoryParams = {
  search: string | null;
  sortBy?: string;
};

type TUpdateStockParams = {
  productId: number;
  stock: number;
};

type TRawQueryEntry = {
  endpointName?: string;
  originalArgs?: unknown;
  status: string;
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
        const queries = (getState() as RootState).api.queries as Record<
          string,
          TRawQueryEntry | undefined
        >;

        const patches = Object.values(queries)
          .filter(
            (entry) =>
              entry?.endpointName === "getInventory" &&
              entry.status === "fulfilled",
          )
          .map((entry) =>
            dispatch(
              inventoryEndpoints.util.updateQueryData(
                "getInventory",
                entry!.originalArgs as TGetInventoryParams,
                (draft) => {
                  const product = draft.products.find(
                    ({ id }) => id === productId,
                  );
                  if (product) product.stock = stock;
                },
              ),
            ),
          );

        try {
          await queryFulfilled;
        } catch {
          patches.forEach((patch) => patch.undo());
        }
      },
    }),
  }),
});

export const { useGetInventoryQuery, useUpdateStockMutation } =
  inventoryEndpoints;
