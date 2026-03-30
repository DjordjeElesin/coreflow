import { DropdownSelect } from "@/components/DropdownSelect";
import { SearchBar } from "@/components/SearchBar";
import { departments } from "@/constants/constants";
import { Box } from "@mui/material";
import { sortBy } from "lodash";

type TEmployeesSearchAndFilterProps = {
  onSearch: (query: string) => void;
  onFilterChange: (value: string) => void;
};

const getOptions = () => {
  const sorted = sortBy(departments);
  return sorted.map((item) => ({ id: item, value: item }));
};

export const EmployeesSearchAndFilter = ({
  onSearch,
  onFilterChange,
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
        value=""
        placeholder="Select Department"
        options={getOptions()}
        onChange={onFilterChange}
        width="300px"
      />
    </Box>
  );
};
