import { Box, Chip } from "@mui/material";

type TInventoryQuickFiltersProps = {
  onSelectQuickFilter: (value: string) => void;
  activeFilter: string | null;
};

const stockQuickFilters = [
  "In Stock",
  "Low Stock",
  "Almost Sold Out",
  "Out of Stock",
];

export const InventoryQuickFilters = ({
  onSelectQuickFilter,
  activeFilter,
}: TInventoryQuickFiltersProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {stockQuickFilters.map((item) => (
        <Chip
          key={item}
          label={item}
          onClick={() => onSelectQuickFilter(item)}
          color={activeFilter === item ? "primary" : "default"}
        />
      ))}
    </Box>
  );
};
