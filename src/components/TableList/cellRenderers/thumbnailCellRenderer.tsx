import { Box } from "@mui/material";

export const thumbnailCellRenderer = (value: string) => (
  <Box sx={{ width: "35px", height: "35px", borderRadius: "50%" }}>
    <img
      style={{ width: "100%", height: "100%", objectFit: "fill" }}
      src={value}
    />
  </Box>
);
