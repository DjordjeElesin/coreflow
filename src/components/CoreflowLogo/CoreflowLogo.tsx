import HubIcon from "@mui/icons-material/Hub";
import { gradient } from "@/styles/colors";
import { Box, Typography } from "@mui/material";

type TCoreflowLogoProps = {
  titlePosition?: "right" | "bottom";
  size?: number;
  showTitle?: boolean;
  showSubTitle?: boolean;
  justify?: "start" | "center" | "end";
};

export const CoreflowLogo = ({
  titlePosition = "bottom",
  size,
  showTitle,
  showSubTitle,
  justify = "center",
}: TCoreflowLogoProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: justify,
        gap: 1,
        flexDirection: titlePosition === "bottom" ? "column" : "row",
      }}
    >
      <Box
        sx={{
          background: gradient.primary,
          alignSelf: "center",
          borderRadius: 2,
          width: size ?? 64,
          height: size ?? 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HubIcon
          style={{
            width: size ? size / 1.5 : 64,
            height: size ? size / 1.5 : 64,
          }}
        />
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
