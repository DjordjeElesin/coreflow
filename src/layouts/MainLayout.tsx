import { NavSidebar } from "@/components/NavSidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        paddingLeft: "200px",
      }}
    >
      <NavSidebar />
      <Outlet />
    </Box>
  );
};
