import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, type SxProps } from "@mui/material";
import { useNavigate } from "react-router-dom";

type TPageContainerProps = {
  content: React.ReactNode;
  backToText?: string;
  contentSx?: SxProps;
  extra?: React.ReactNode;
};

export const DetailsPageContainer = ({
  content,
  backToText,
  contentSx,
  extra,
}: TPageContainerProps) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ alignSelf: "flex-start" }}
      >
        {backToText}
      </Button>
      <Box
        sx={{ display: "flex", gap: 2, alignItems: "flex-start", ...contentSx }}
      >
        {content}
      </Box>
      {extra}
    </Box>
  );
};
