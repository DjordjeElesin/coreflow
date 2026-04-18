import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type TNavigationButtonProps = {
  direction: "previous" | "next";
  onClick: () => void;
  variant?: "default" | "zoom";
};

const getIconStyles = (variant: "default" | "zoom", isPrevious: boolean) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  ...(isPrevious ? { left: 8 } : { right: 8 }),
  color: "white",
  bgcolor:
    variant === "zoom" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.6)",
  "&:hover": {
    bgcolor:
      variant === "zoom" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.8)",
  },
});

const NavigationButton = ({
  direction,
  onClick,
  variant = "default",
}: TNavigationButtonProps) => {
  const isPrevious = direction === "previous";

  return (
    <IconButton
      id={`image-carousel-${direction}-btn`}
      onClick={onClick}
      sx={getIconStyles(variant, isPrevious)}
    >
      {isPrevious ? <ChevronLeft /> : <ChevronRight />}
    </IconButton>
  );
};

type TImageNavigationProps = {
  onPrevious: () => void;
  onNext: () => void;
  variant?: "default" | "zoom";
};

export const ImageNavigation = ({
  onPrevious,
  onNext,
  variant = "default",
}: TImageNavigationProps) => {
  return (
    <>
      <NavigationButton
        direction="previous"
        onClick={onPrevious}
        variant={variant}
      />
      <NavigationButton direction="next" onClick={onNext} variant={variant} />
    </>
  );
};
