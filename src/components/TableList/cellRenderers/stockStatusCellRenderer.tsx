import { Chip } from "@mui/material";

export const stockStatusCellRenderer = <T extends { availabilityStatus: string }>(row: T) => {
  const status = row.availabilityStatus;
  if (status === "In Stock") return <Chip label="In Stock" color="success" />;
  if (status === "Low Stock") return <Chip label="Low Stock" color="warning" />;
  if (status === "Out of Stock")
    return <Chip label="Out of Stock" color="error" />;
};
