import { Chip } from "@mui/material";

export const chipCellRenderer = (value: string) => {
  return <Chip label={value} />;
};
