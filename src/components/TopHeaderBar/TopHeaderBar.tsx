import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { links } from "../NavSidebar/navLinks";

const getPageTitle = (pathname: string) =>
  links.find((link) => link.path === pathname)?.name ?? "Page";

export const TopHeaderBar = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        height: "45px",
        backgroundColor: "background.paper",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: 1,
        marginBottom: 2,
        borderRadius: 2,
        zIndex: 1000,
      }}
    >
      <Typography variant="h6" fontWeight={700}>
        {getPageTitle(location.pathname)}
      </Typography>
    </Box>
  );
};
