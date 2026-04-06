import { Box } from "@mui/material";

export const defaultCellRenderer = (value: string) => (
  <Box
    sx={{
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      textWrap: "nowrap",
    }}
  >
    {value ? value : "-"}
  </Box>
);
