import type { TProduct } from "@/types";

export const productFilterQuery = (
  product: TProduct,
  categoryFilter: string | null,
  stockFilter: string | null,
) => {
  const { category, stock } = product;

  const hasCategoryFilter = !categoryFilter || category === categoryFilter;
  const hasStockFilter =
    !stockFilter ||
    (stockFilter === "In Stock" && stock > 50) ||
    (stockFilter === "Low Stock" && stock > 10 && stock <= 50) ||
    (stockFilter === "Almost Sold Out" && stock <= 10 && stock > 0) ||
    (stockFilter === "Out of Stock" && stock === 0);

  return hasCategoryFilter && hasStockFilter;
};
