import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { NavSidebar } from "@/components/NavSidebar";
import { ScrollableContent } from "./ScrollableContent";
import { TopHeaderBar } from "@/components/TopHeaderBar";
import { Footer } from "@/components/Footer";

export const MainLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        paddingLeft: "200px",
      }}
    >
      <NavSidebar />
      <ScrollableContent>
        <TopHeaderBar />
        <Outlet />
        <Footer width="calc(100%-200px)" />
      </ScrollableContent>
    </Box>
  );
};
