import { Button } from "@mui/material";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import { useAppSelector } from "@/store/store";
import { useState } from "react";
import { InventoryCorrectionModal } from "./InventoryCorrectionModal";
import type { TProduct } from "@/types/types";

export const InventoryCorrection = (_value: string, row: TProduct) => {
  const userRole = useAppSelector((state) => state.auth.user?.role);
  const [isOpen, setIsOpen] = useState(false);

  if (userRole !== "admin") return null;

  const onOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <>
      <Button
        startIcon={<BorderColorRoundedIcon />}
        sx={{ textWrap: "nowrap" }}
        onClick={onOpen}
      >
        Stock Correction
      </Button>
      {isOpen && (
        <InventoryCorrectionModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          productId={row.id}
          stock={row.stock}
        />
      )}
    </>
  );
};
