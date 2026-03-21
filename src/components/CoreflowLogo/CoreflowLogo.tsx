import HubIcon from "@mui/icons-material/Hub";
import { gradient } from "@/styles/colors";
import { Box, Typography } from "@mui/material";

type TCoreflowLogoProps = {
  showTitle?: boolean;
  showSubTitle?: boolean;
};

export const CoreflowLogo = ({
  showTitle,
  showSubTitle,
}: TCoreflowLogoProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          background: gradient.primary,
          alignSelf: "center",
          borderRadius: 2,
          width: 64,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HubIcon />
      </Box>
      {showTitle && (
        <Typography variant="h5" fontWeight={900}>
          Coreflow
        </Typography>
      )}
      {showSubTitle && (
        <Typography variant="subtitle1" color="textSecondary">
          Enterprise Resource Planning
        </Typography>
      )}
    </Box>
  );
};
