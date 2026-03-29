import { useGetEmployeesQuery } from "@/api/endpoints/employeesEndpoints";
import { PAGE_SIZE } from "@/components/TableList/TableList";
import type { TUser } from "@/types/types";
import { type MouseEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useEmployees = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 0);
  const search = searchParams.get("search");
  const sort = searchParams.get("sort");
  const order = searchParams.get("order") ?? "asc";

  const { data, isLoading, error } = useGetEmployeesQuery({
    limit: PAGE_SIZE,
    skip: page * PAGE_SIZE,
    search: search,
    // sortBy: sort ?? sortingFields[0],
    order,
  });

  const onRowClicked = (row: TUser) => {
    navigate(`/employees/${row.id}`);
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

  const onSort = (field: string) =>
    setSearchParams((prev) => {
      prev.set("sort", field);
      return prev;
    });

  const onSortOrder = (order: string) =>
    setSearchParams((prev) => {
      if (order === "asc") prev.delete("order");
      else prev.set("order", order);
      return prev;
    });

  //   const columns = useMemo(() => columnDefs, []);

  return {
    data,
    isLoading,
    error,
    // columns,
    page,
    sort,
    search,
    order,
    onRowClicked,
    onPageChange,
    onSearch,
    onSort,
    onSortOrder,
  };
};
