import { getTitle } from "@/hooks/useTitle";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

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
        {getTitle(location.pathname)}
      </Typography>
    </Box>
  );
};
