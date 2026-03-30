import { Box } from "@mui/material";
import { EmployeesTable } from "./EmployeesTable";
import { useEmployees } from "./useEmployees";
import { EmployeesSearchAndFilter } from "./EmployeesSearchAndFilter";
import { PAGE_SIZE } from "@/components/TableList/TableList";

export const Employees = () => {
  const {
    users,
    isLoading,
    columns,
    page,
    onPageChange,
    onRowClicked,
    onSearch,
    onFilterChange,
  } = useEmployees();

  const paginatedData =
    users?.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE) ?? [];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <EmployeesSearchAndFilter
        onSearch={onSearch}
        onFilterChange={onFilterChange}
      />
      <EmployeesTable
        data={paginatedData}
        isLoading={isLoading}
        columns={columns}
        page={page}
        count={users?.length ?? 0}
        onRowClicked={onRowClicked}
        onPageChange={onPageChange}
      />
    </Box>
  );
};
