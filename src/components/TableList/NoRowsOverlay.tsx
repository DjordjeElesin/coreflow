import { Box, TableCell, TableRow, Typography } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";

export const NoRowsOverlay = ({ colSpan }: { colSpan: number }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: "auto",
          }}
        >
          <SearchOffIcon sx={{ color: "#888" }} />
          <Typography variant="subtitle2" color="#888">
            No results found.
          </Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
};
