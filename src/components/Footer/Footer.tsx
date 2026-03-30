import { Box } from "@mui/material";

type TFooterProps = {
  width?: string;
  variant?: "flow" | "fixed";
};

export const Footer = ({ width = "100%", variant = "flow" }: TFooterProps) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "50px",
      marginTop: variant === "flow" ? "auto" : 0,
      paddingTop: 2,
      width,
      color: "text.secondary",
      ...(variant === "fixed" && {
        position: "absolute",
        bottom: 0,
        width: "100%",
      }),
    }}
  >
    &copy; {new Date().getFullYear()} Coreflow - Djordje Elesin. All rights
    reserved.
  </Box>
);
