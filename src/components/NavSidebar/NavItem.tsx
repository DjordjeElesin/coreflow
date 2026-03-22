import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import type { TNavItem } from "./navLinks";

export const NavItem = ({ item }: { item: TNavItem }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  return (
    <Link to={item.path} style={{ textDecoration: "none", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          borderRadius: 2,
          padding: 1,
          backgroundColor: isActive ? "primary.main" : "transparent",
          fontWeight: isActive ? 600 : 400,
          ":hover": {
            backgroundColor: isActive ? "primary.main" : "action.hover",
          },
          color: isActive ? "primary.contrastText" : "text.secondary",
          cursor: "pointer",
        }}
      >
        {item.icon && <Box mr={1}>{item.icon}</Box>}
        {item.name}
      </Box>
    </Link>
  );
};
