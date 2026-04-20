import {
  useGetInventoryQuery,
  useGetProductCategoriesQuery,
} from "@/api/endpoints/inventoryEndpoints/inventoryEndpoints";
import type { TProduct } from "@/types/types";
import { useMemo, type MouseEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { inventoryColumnDefs } from "./inventoryColumnDefs";
import type { TSelectOption } from "@/components/DropdownSelect";
import { productFilterQuery } from "./utils";

export const useInventory = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 0);
  const search = searchParams.get("search");
  const categoryFilter = searchParams.get("category");
  const stockFilter = searchParams.get("stock");

  const {
    data,
    isLoading: isLoadingProducts,
    error,
  } = useGetInventoryQuery({
    search: search,
  });
  const { data: categories, isLoading: isLoadingCategories } =
    useGetProductCategoriesQuery();

  const categoryOptions = useMemo(
    () =>
      categories?.map(
        ({ slug, name }) =>
          ({
            id: slug,
            value: name,
          }) as TSelectOption,
      ) ?? [],
    [categories],
  );

  const filteredData = useMemo(
    () =>
      data?.products?.filter((product) =>
        productFilterQuery(product, categoryFilter, stockFilter),
      ),
    [data, categoryFilter, stockFilter],
  );

  const onRowClicked = (row: TProduct) => {
    navigate(`/inventory/${row.id}`);
  };

  const onPageChange = (
    _: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) =>
    setSearchParams((prev) => {
      prev.set("page", String(newPage));
      return prev;
    });

  const onSearchParamsChange = (
    value: string,
    name: "search" | "category" | "stock",
  ) =>
    setSearchParams((prev) => {
      if (value) prev.set(name, value);
      else prev.delete(name);

      prev.set("page", "0");
      return prev;
    });

  const columns = useMemo(() => inventoryColumnDefs, []);

  return {
    products: filteredData,
    isLoading: isLoadingProducts || isLoadingCategories,
    error,
    columns,
    page,
    search,
    onRowClicked,
    onPageChange,
    onSearchParamsChange,
    onResetFilters: () => setSearchParams({}),
    categoryFilter,
    categoryOptions,
  };
};
