import { Box, CircularProgress, type SxProps } from "@mui/material";

type TLoadingProps = {
  isLoading?: boolean;
  showBlur?: boolean;
  width?: number | string;
  height?: number | string;
  flex?: string;
  screenFit?: "full" | "page" | "inline";
  loadingSx?: SxProps;
};

const getPositionStyle = (screenFit: TLoadingProps["screenFit"]) => {
  if (screenFit === "full") return "fixed";
  if (screenFit === "page") return "absolute";
  return "relative";
};

export const Loading = ({
  isLoading = true,
  showBlur = false,
  screenFit = "page",
  width = "100%",
  height = "auto",
  loadingSx,
}: TLoadingProps) => {
  if (!isLoading) return null;
  return (
    <Box
      sx={{
        zIndex: 9999,
        position: getPositionStyle(screenFit),
        top: 0,
        left: 0,
        bottom: 0,
        minHeight: screenFit === "full" ? "100vh" : height,
        width,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: showBlur ? "blur(4px)" : "none",
        flex: "1 1 auto",
        ...loadingSx,
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};
