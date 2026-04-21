import { useGetEmployeesQuery } from "@/api/endpoints/employeesEndpoints";
import type { TUser } from "@/types/types";
import { useMemo, type MouseEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { employeesColumnDefs } from "./employeesColumnDefs";
import sortBy from "lodash/sortBy";
import { departments } from "@/constants/constants";

const getOptions = () => {
  const sorted = sortBy(departments);
  return sorted.map((item) => ({ id: item, value: item }));
};

export const useEmployees = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 0);
  const search = searchParams.get("search");
  const department = searchParams.get("department");

  const { data, isLoading, error } = useGetEmployeesQuery({
    search: search,
  });

  const filteredData = useMemo(() => {
    if (!department) return data?.users;
    return data?.users?.filter(
      ({ company }) => company.department === department,
    );
  }, [data, department]);

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

  const onFilterChange = (value: string) => {
    setSearchParams((prev) => {
      if (value) prev.set("department", value);
      else prev.delete("department");

      prev.set("page", "0");
      return prev;
    });
  };

  const onResetFilters = () => {
    setSearchParams({})
    
  };

  const columns = useMemo(() => employeesColumnDefs, []);

  return {
    users: filteredData,
    department,
    departmentOptions: getOptions(),
    isLoading,
    error,
    columns,
    page,
    search,
    onRowClicked,
    onPageChange,
    onSearch,
    onResetFilters,
    onFilterChange,
  };
};
