import { AppDialog } from "@/components/AppDialog";
import { NumberSpinner } from "@/components/NumberSpinner";
import { TextAreaInput } from "@/components/TextAreaInput";
import { useUpdateStockMutation } from "@/api/endpoints/inventoryEndpoints/inventoryEndpoints";
import { displayToast } from "@/utils/displayToast/displayToast";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Loading } from "@/components/Loading";

type TInventoryCorrectionModalProps = {
  open: boolean;
  onClose: () => void;
  productId: number;
  stock: number;
};

export const InventoryCorrectionModal = ({
  open,
  onClose,
  productId,
  stock,
}: TInventoryCorrectionModalProps) => {
  const [comment, setComment] = useState("");
  const [stockValue, setStockValue] = useState(stock);
  const [updateStock, { isLoading }] = useUpdateStockMutation();

  const isDisabled = !comment.trim() || stockValue === stock;

  const onSubmit = async () => {
    try {
      await updateStock({ productId, stock: stockValue }).unwrap();
      onClose();
    } catch {
      displayToast("error", "Failed to update stock. Please try again.");
    }
  };

  return (
    <AppDialog
      open={open}
      onClose={onClose}
      title="Inventory Correction"
      actions={
        <>
          <Button id="inventory-correction-cancel" onClick={onClose}>
            Cancel
          </Button>
          <Button
            id="inventory-correction-submit"
            variant="contained"
            onClick={onSubmit}
            disabled={isDisabled || isLoading}
          >
            Submit
          </Button>
        </>
      }
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <NumberSpinner
          label="Corrected Stock Quantity"
          min={0}
          defaultValue={stock}
          value={stockValue}
          onValueChange={(value) => setStockValue(value ?? 0)}
          size="small"
        />
        <TextAreaInput
          label="Reason for Correction"
          maxCharacters={200}
          required
          value={comment}
          onChange={setComment}
        />
        <Loading isLoading={isLoading} showBlur />
      </Box>
    </AppDialog>
  );
};
