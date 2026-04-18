export const getStockLevelColor = (stock: number) => {
  if (stock > 50) return "success";
  if (stock > 10 && stock <= 50) return "warning";
  if (stock <= 10 && stock > 0) return "error";
  return "info";
};
