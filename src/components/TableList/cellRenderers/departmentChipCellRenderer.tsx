import { Chip } from "@mui/material";

export const departmentChipCellRenderer = (value: string) => {
  return <Chip label={value} color="primary" />;
};
