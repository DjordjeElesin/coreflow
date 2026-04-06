import { Chip } from "@mui/material";

export const stockNumberCellRenderer = (value: string) => {
  const stock = Number(value);
  if (stock > 50) return <Chip label={`${stock} Units`} color="success" />;
  if (stock > 10 && stock <= 50)
    return <Chip label={`${stock} Units`} color="warning" />;
  if (stock <= 10 && stock > 0)
    return <Chip label={`${stock} Units`} color="error" />;
  return <Chip label="Out of Stock" color="info" />;
};
