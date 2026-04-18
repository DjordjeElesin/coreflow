import { useState, useCallback, useRef } from "react";

import { Box, Dialog, IconButton, type SxProps } from "@mui/material";

import { Loading } from "@/components/Loading";
import { ImageNavigation } from "./ImageNavigation";
import { Indicators } from "./Indicators";
import { CarouselActions } from "./CarouselActions";
import type { TImage } from "@/types";
import CloseIcon from "@mui/icons-material/Close";

const SWIPE_THRESHOLD = 50;

type TImageCarouselProps = {
  images: TImage[];
  height?: number | string;
  width?: number | string;
  extraActions?: (activeIndex: number) => React.ReactNode;
  objectFit?: string;
  sx?: SxProps;
};

export const ImageCarousel = ({
  images,
  height = 350,
  width = "100%",
  objectFit = "cover",
  extraActions,
  sx,
}: TImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isZoomImageLoaded, setIsZoomImageLoaded] = useState(false);

  const hasMultiple = images?.length > 1;

  const onPrevious = useCallback(() => {
    setIsZoomImageLoaded(false);
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const onNext = useCallback(() => {
    setIsZoomImageLoaded(false);
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const onOpenZoom = useCallback(() => {
    setIsZoomImageLoaded(false);
    setIsZoomOpen(true);
  }, []);
  const onCloseZoom = useCallback(() => setIsZoomOpen(false), []);

  const onIndicatorClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const touchStartX = useRef(0);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const delta = touchStartX.current - e.changedTouches[0].clientX;
      if (delta > SWIPE_THRESHOLD) onNext();
      if (delta < -SWIPE_THRESHOLD) onPrevious();
    },
    [onNext, onPrevious],
  );

  if (!images.length) return null;

  return (
    <>
      <Box
        id="image-carousel"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        sx={{ position: "relative", width, height, overflow: "hidden", ...sx }}
      >
        <Box
          component="img"
          loading="lazy"
          src={images[activeIndex].src}
          alt=""
          sx={{
            width: "100%",
            height: "100%",
            objectFit,
            display: "block",
          }}
        />

        {hasMultiple && (
          <ImageNavigation onPrevious={onPrevious} onNext={onNext} />
        )}
        <CarouselActions
          imageCount={images.length}
          activeIndex={activeIndex}
          onIndicatorClick={onIndicatorClick}
          onOpenZoom={onOpenZoom}
          hasMultiple={hasMultiple}
          extraActions={extraActions}
        />
      </Box>

      <Dialog
        open={isZoomOpen}
        onClose={onCloseZoom}
        fullScreen
        slotProps={{
          paper: {
            onTouchStart: onTouchStart,
            onTouchEnd: onTouchEnd,
            sx: {
              bgcolor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          },
        }}
      >
        <IconButton
          id="image-carousel-close-zoom-btn"
          onClick={onCloseZoom}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            color: "white",
            zIndex: 1,
            bgcolor: "rgba(255, 255, 255, 0.1)",
            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
          }}
        >
          <CloseIcon />
        </IconButton>
        <Loading isLoading={!isZoomImageLoaded} screenFit="inline" />
        <Box
          component="img"
          src={images[activeIndex].src}
          alt=""
          onLoad={() => setIsZoomImageLoaded(true)}
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            display: isZoomImageLoaded ? "block" : "none",
          }}
        />

        {hasMultiple && (
          <>
            <ImageNavigation
              onPrevious={onPrevious}
              onNext={onNext}
              variant="zoom"
            />
            <Indicators
              count={images.length}
              activeIndex={activeIndex}
              onIndicatorClick={onIndicatorClick}
              variant="zoom"
            />
          </>
        )}
      </Dialog>
    </>
  );
};
