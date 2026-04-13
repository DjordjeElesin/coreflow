import type { AppDispatch, RootState } from "@/store/store";
import type { TProduct } from "@/types/types";
import {
  inventoryEndpoints,
  type TGetInventoryParams,
} from "./inventoryEndpoints";

type TRawQueryEntry = {
  endpointName?: string;
  originalArgs?: unknown;
  status: string;
};

export const onUpdateStockStarted = async (
  { productId, stock }: { productId: number; stock: number },
  {
    dispatch,
    queryFulfilled,
    getState,
  }: {
    dispatch: AppDispatch;
    queryFulfilled: Promise<{ data: TProduct }>;
    getState: () => unknown;
  },
) => {
  const queries = (getState() as RootState).api.queries as Record<
    string,
    TRawQueryEntry | undefined
  >;

  const patches = Object.values(queries)
    .filter(
      (entry) =>
        entry?.endpointName === "getInventory" && entry.status === "fulfilled",
    )
    .map((entry) =>
      dispatch(
        inventoryEndpoints.util.updateQueryData(
          "getInventory",
          entry!.originalArgs as TGetInventoryParams,
          (draft) => {
            const product = draft.products.find(({ id }) => id === productId);
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
};
