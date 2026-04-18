import { Box, IconButton } from "@mui/material";
import { Indicators } from "./Indicators";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

type TCarouselActionsProps = {
  imageCount: number;
  activeIndex: number;
  onIndicatorClick: (index: number) => void;
  onOpenZoom: () => void;
  hasMultiple?: boolean;
  extraActions?: (activeIndex: number) => React.ReactNode;
};

export const CarouselActions = ({
  onOpenZoom,
  hasMultiple,
  imageCount,
  activeIndex,
  onIndicatorClick,
  extraActions,
}: TCarouselActionsProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "20%",
        background:
          "linear-gradient(to top, rgba(20,26,33, 0.75) 0%, rgba(20,26,33,0) 100%)",
      }}
    >
      {extraActions && (
        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            left: 8,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          {extraActions(activeIndex)}
        </Box>
      )}
      <IconButton
        id="image-carousel-zoom-btn"
        onClick={onOpenZoom}
        sx={{
          position: "absolute",
          bottom: 8,
          right: 8,
          bgcolor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          "&:hover": { bgcolor: "rgba(0, 0, 0, 0.8)" },
        }}
      >
        <ZoomInIcon />
      </IconButton>
      {hasMultiple && (
        <Indicators
          count={imageCount}
          activeIndex={activeIndex}
          onIndicatorClick={onIndicatorClick}
        />
      )}
    </Box>
  );
};
