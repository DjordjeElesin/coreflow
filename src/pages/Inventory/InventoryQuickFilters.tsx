import { Box, Chip } from "@mui/material";

type TInventoryQuickFiltersProps = {
  onSelectQuickFilter: (value: string) => void;
};

const stockQuickFilters = [
  "In Stock",
  "Low Stock",
  "Almost Sold Out",
  "Out of Stock",
];

export const InventoryQuickFilters = ({
  onSelectQuickFilter,
}: TInventoryQuickFiltersProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {stockQuickFilters.map((item) => (
        <Chip
          key={item}
          label={item}
          onClick={() => onSelectQuickFilter(item)}
        />
      ))}
    </Box>
  );
};
