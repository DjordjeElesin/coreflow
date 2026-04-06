import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const ratingCellRenderer = (value: string) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <StarIcon color="warning" />
      <Box component="span">{Number(value).toFixed(1)}</Box>
    </Box>
  );
};
