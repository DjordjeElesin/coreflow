import { Box } from "@mui/material";

export const Footer = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "50px",
      position: "absolute",
      bottom: 0,
      width: "100%",
      color: "text.secondary",
    }}
  >
    &copy; {new Date().getFullYear()} Coreflow - Djordje Elesin. All rights
    reserved.
  </Box>
);
