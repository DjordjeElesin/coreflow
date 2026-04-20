import { Box } from "@mui/material";
import { EmployeesTable } from "./EmployeesTable";
import { useEmployees } from "./useEmployees";
import { PAGE_SIZE } from "@/components/TableList/TableList";
import { SearchAndFilterShell } from "@/components/SearchAndFilterShell";

export const Employees = () => {
  const {
    users,
    department,
    departmentOptions,
    isLoading,
    columns,
    page,
    onPageChange,
    onRowClicked,
    onSearch,
    onResetFilters,
    onFilterChange,
  } = useEmployees();

  const paginatedData =
    users?.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE) ?? [];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <SearchAndFilterShell
        name="employees"
        total={users?.length ?? 0}
        onSearch={onSearch}
        onResetFilters={onResetFilters}
        dropdownSelectOptions={{
          label: "Department",
          value: department,
          options: departmentOptions,
          onDropdownChange: onFilterChange,
        }}
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
