import { getStockLevelColor } from "@/utils/getStockLevelColor/getStockLevelColor";
import { Chip } from "@mui/material";

export const stockNumberCellRenderer = (value: string) => {
  const stock = Number(value);
  const color = getStockLevelColor(stock);
  if (stock > 0) return <Chip label={`${stock} Units`} color={color} />;
  return <Chip label="Out of Stock" color={color} />;
};
