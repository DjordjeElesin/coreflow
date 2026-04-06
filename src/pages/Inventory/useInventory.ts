import { useGetInventoryQuery } from "@/api/endpoints/inventoryEndpoints/inventoryEndpoints";
import type { TProduct } from "@/types/types";
import { useMemo, type MouseEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { inventoryColumnDefs } from "./inventoryColumnDefs";

export const useInventory = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 0);
  const search = searchParams.get("search");
  const categoryFilter = searchParams.get("category");

  const { data, isLoading, error } = useGetInventoryQuery({
    search: search,
  });

  const filteredData = useMemo(() => {
    if (!categoryFilter) return data?.products;
    return data?.products?.filter(
      ({ category }) => category === categoryFilter,
    );
  }, [data, categoryFilter]);

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

  const onSearch = (value: string) =>
    setSearchParams((prev) => {
      if (value) prev.set("search", value);
      else prev.delete("search");

      prev.set("page", "0");
      return prev;
    });

  const onFilterChange = (value: string) => {
    setSearchParams((prev) => {
      if (value) prev.set("category", value);
      else prev.delete("category");

      prev.set("page", "0");
      return prev;
    });
  };

  const columns = useMemo(() => inventoryColumnDefs, []);

  return {
    products: filteredData,
    categoryFilter,
    isLoading,
    error,
    columns,
    page,
    search,
    onRowClicked,
    onPageChange,
    onSearch,
    onFilterChange,
  };
};
