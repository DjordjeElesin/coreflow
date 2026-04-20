import { Box } from "@mui/material";
import { InventoryTable } from "./InventoryTable";
import { useInventory } from "./useInventory";
import { PAGE_SIZE } from "@/components/TableList/TableList";
import { SearchAndFilterShell } from "@/components/SearchAndFilterShell";
import { InventoryQuickFilters } from "./InventoryQuickFilters";

export const Inventory = () => {
  const {
    products,
    isLoading,
    columns,
    page,
    onRowClicked,
    onPageChange,
    onSearchParamsChange,
    onResetFilters,
    categoryFilter,
    categoryOptions,
  } = useInventory();

  const paginatedData =
    products?.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE) ?? [];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <SearchAndFilterShell
        name="categories"
        total={products?.length ?? 0}
        onSearch={(value) => onSearchParamsChange(value, "search")}
        onResetFilters={onResetFilters}
        dropdownSelectOptions={{
          label: "Category",
          value: categoryFilter,
          options: categoryOptions,
          onDropdownChange: (value) => onSearchParamsChange(value, "category"),
        }}
        quickFilters={
          <InventoryQuickFilters
            onSelectQuickFilter={(value) =>
              onSearchParamsChange(value, "stock")
            }
          />
        }
      />
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
