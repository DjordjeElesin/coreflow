import { Box, CircularProgress, type SxProps } from "@mui/material";
import type { Theme } from "@mui/material/styles";

type TLoadingProps = {
  isLoading?: boolean;
  showBlur?: boolean;
  width?: number | string;
  height?: number | string;
  flex?: string;
  fullScreen?: boolean;
  sx?: SxProps<Theme>;
};

export const Loading = ({
  isLoading = true,
  showBlur = false,
  fullScreen = true,
  width = "100%",
  height = "auto",
  flex = "1 1 auto",
}: TLoadingProps) => {
  if (!isLoading) return null;
  return (
    <Box
      sx={{
        zIndex: 9999,
        position: fullScreen ? "fixed" : "relative",
        top: 0,
        left: 0,
        minHeight: fullScreen ? "100vh" : height,
        width,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: showBlur ? "blur(4px)" : "none",
        flex,
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};
