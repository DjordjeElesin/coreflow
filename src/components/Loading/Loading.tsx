import { Box, CircularProgress } from "@mui/material";

export const Loading = () => {
  return (
    <Box
      sx={{
        zIndex: 9999,
        position: "fixed",
        top: 0,
        left: 0,
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(4px)",
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};
