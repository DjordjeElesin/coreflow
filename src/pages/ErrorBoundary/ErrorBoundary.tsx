import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ErrorBoundary = () => (
  <Box
    sx={{
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        p: 4,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        maxWidth: 400,
      }}
    >
      <Typography variant="h5" fontWeight={600}>
        Oops!
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        An unexpected error has occurred.
      </Typography>
      <Typography variant="subtitle1">
        <Link to="/">Go back</Link>
      </Typography>
    </Paper>
  </Box>
);
