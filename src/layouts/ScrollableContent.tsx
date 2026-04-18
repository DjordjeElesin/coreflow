import { Box } from "@mui/material";

type TScrollableContentProps = {
  children: React.ReactNode;
  height?: string;
  width?: string;
};

export const ScrollableContent = ({
  children,
  height = "100vh",
  width = "100%",
}: TScrollableContentProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        height,
        width,
        padding: 2,
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
};
