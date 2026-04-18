import { Box, Button, Typography } from "@mui/material";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import { flexCenter } from "@/styles/mixins";
import { getStockLevelColor } from "@/utils/getStockLevelColor";
import { StockCorrectionModal } from "@/components/StockCorrectionModal/StockCorrectionModal";
import { useState } from "react";

type TProductStockCorrectionProps = {
  productId?: number;
  stock?: number;
};

export const ProductStockCorrection = ({
  productId,
  stock,
}: TProductStockCorrectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!productId || stock === undefined) return null;

  const stockColor = getStockLevelColor(stock);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="caption" color="text.secondary" fontWeight={600}>
        Stock Level
      </Typography>
      <Box
        sx={{
          ...flexCenter,
          p: 4,
          backgroundColor: `${stockColor}.main`,
          borderRadius: 2,
        }}
      >
        <Typography variant="h2" color={`${stockColor}.contrastText`}>
          {stock}
        </Typography>
      </Box>
      <Button
        startIcon={<BorderColorRoundedIcon />}
        sx={{ textWrap: "nowrap" }}
        variant="outlined"
        onClick={() => setIsOpen(true)}
      >
        Edit
      </Button>
      <StockCorrectionModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        productId={productId}
        stock={stock}
      />
    </Box>
  );
};
