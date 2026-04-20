import { Box, Button, Typography, type SxProps } from "@mui/material";
import { SearchBar } from "../SearchBar";
import { DropdownSelect, type TSelectOption } from "../DropdownSelect";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

type TDropdownSelectOptions = {
  label: string;
  value: string | null;
  options: TSelectOption[];
  onDropdownChange: (value: string) => void;
};

type TSearchAndFilterShellProps = {
  name: string;
  total: number;
  onSearch: (query: string) => void;
  onResetFilters: () => void;
  dropdownSelectOptions?: TDropdownSelectOptions;
  filterSection?: React.ReactNode;
  quickFilters?: React.ReactNode;
  containerSx?: SxProps;
};

export const SearchAndFilterShell = ({
  name,
  total,
  onSearch,
  onResetFilters,
  dropdownSelectOptions,
  filterSection,
  quickFilters,
  containerSx,
}: TSearchAndFilterShellProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
        backgroundColor: "background.paper",
        borderRadius: 2,
        overflow: "hidden",
        ...containerSx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <SearchBar
          onSearch={onSearch}
          defaultQuery=""
          placeholder={`Search ${name ?? "items"}`}
          sx={{ minWidth: "200px" }}
        />
        {dropdownSelectOptions && (
          <DropdownSelect
            label={dropdownSelectOptions.label}
            value={dropdownSelectOptions.value ?? ""}
            placeholder={`Select ${dropdownSelectOptions.label ?? "items"}`}
            options={dropdownSelectOptions.options}
            onChange={dropdownSelectOptions.onDropdownChange}
            width="300px"
          />
        )}
        {filterSection && filterSection}
        <Button startIcon={<RestartAltIcon />} onClick={onResetFilters}>
          Reset
        </Button>
        <Typography variant="caption" sx={{ textWrap: "nowrap" }}>
          {total} {name ?? "item"}
        </Typography>
      </Box>
      {quickFilters}
    </Box>
  );
};
