import { Box } from "@mui/material";
import { InventoryTable } from "./InventoryTable";
import { useInventory } from "./useInventory";
import { PAGE_SIZE } from "@/components/TableList/TableList";

export const Inventory = () => {
  const {
    products,
    // categoryFilter,
    isLoading,
    // error,
    columns,
    page,
    // search,
    onRowClicked,
    onPageChange,
    // onSearch,
    // onFilterChange,
  } = useInventory();

  const paginatedData =
    products?.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE) ?? [];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <InventoryTable
        data={paginatedData}
        isLoading={isLoading}
        columns={columns}
        count={products?.length}
        page={page}
        onRowClicked={onRowClicked}
        onPageChange={onPageChange}
      />
    </Box>
  );
};
