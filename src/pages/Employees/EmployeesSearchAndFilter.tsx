import { DropdownSelect } from "@/components/DropdownSelect";
import { SearchBar } from "@/components/SearchBar";
import { departments } from "@/constants/constants";
import { Box, Typography } from "@mui/material";
import { sortBy } from "lodash";

type TEmployeesSearchAndFilterProps = {
  value: string | null;
  onSearch: (query: string) => void;
  onFilterChange: (value: string) => void;
  employeeTotal?: number;
};

const getOptions = () => {
  const sorted = sortBy(departments);
  return sorted.map((item) => ({ id: item, value: item }));
};

const getEmployeeTotal = (total?: number) => {
  if (total === 1) return `${total} employee`;
  return `${total} employees`;
};

export const EmployeesSearchAndFilter = ({
  value,
  onSearch,
  onFilterChange,
  employeeTotal,
}: TEmployeesSearchAndFilterProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        padding: 2,
        backgroundColor: "background.paper",
        borderRadius: 2,
      }}
    >
      <SearchBar
        onSearch={onSearch}
        defaultQuery=""
        placeholder="Search by name..."
      />
      <DropdownSelect
        label="Department"
        value={value ?? ""}
        placeholder="Select Department"
        options={getOptions()}
        onChange={onFilterChange}
        width="300px"
      />
      <Typography variant="caption" sx={{ textWrap: "nowrap" }}>
        {getEmployeeTotal(employeeTotal)}
      </Typography>
    </Box>
  );
};
