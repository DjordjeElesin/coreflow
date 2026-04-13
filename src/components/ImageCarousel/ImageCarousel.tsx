import type { TImage } from "@/types";
import { Box, Button } from "@mui/material";
import { useState } from "react";

type TCarouselNavigationProps = {
  onPrev: () => void;
  onNext: () => void;
};

const CarouselNavigation = ({ onPrev, onNext }: TCarouselNavigationProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        transform: "translateY(-50%)",
      }}
    >
      <Button onClick={onPrev}>Prev</Button>
      <Button onClick={onNext}>Next</Button>
    </Box>
  );
};

type TImageContainerProps = {
  image: TImage;
  offset?: number;
  onPrev: () => void;
  onNext: () => void;
};

const ImageContainer = ({
  image,
  offset,
  onNext,
  onPrev,
}: TImageContainerProps) => {
  const marginLeft = offset ? `-${offset * 100}%` : 0;
  return (
    <Box
      sx={{
        height: "100%",
        minWidth: "100%",
        overflow: "hidden",
        display: "block",
        marginLeft,
      }}
    >
      <Box
        component="img"
        src={image.src}
        alt={image.alt}
        sx={{ height: "100%", width: "100%", objectFit: "contain" }}
      />
      <CarouselNavigation onNext={onNext} onPrev={onPrev} />
    </Box>
  );
};

type TImageCarouselProps = {
  images?: TImage[];
  height?: number | string;
  width?: number | string;
};

export const ImageCarousel = ({
  images,
  height = 350,
  width = "100%",
}: TImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  if (!images) return null;

  const onNext = () => setActiveIndex((prev) => prev + 1);
  const onPrev = () => setActiveIndex((prev) => prev - 1);

  return (
    <Box
      sx={{
        position: "relative",
        height,
        width,
        display: "flex",
      }}
    >
      {images?.map((img, index) => (
        <ImageContainer
          key={img.src}
          offset={index === 0 ? activeIndex : 0}
          image={img}
          onNext={onNext}
          onPrev={onPrev}
        />
      ))}
    </Box>
  );
};
