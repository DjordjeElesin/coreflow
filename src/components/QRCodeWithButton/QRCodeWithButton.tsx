import { Box, Button, Typography } from "@mui/material";
import QrCode from "@mui/icons-material/QrCode";
import { useState } from "react";
import { AppDialog } from "../AppDialog";
import { flexColumn } from "@/styles/mixins";

type TQRCodeWithButtonProps = {
  qrCode?: string;
  sku?: string;
};

const QRCodeTitle = ({ sku }: { sku?: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <QrCode />
    <Typography variant="h5">
      QR Code{" "}
      {sku && (
        <Typography component="span" variant="h5" color="text.secondary">
          : {sku}
        </Typography>
      )}
    </Typography>
  </Box>
);

export const QRCodeWithButton = ({ qrCode, sku }: TQRCodeWithButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!qrCode) return null;

  return (
    <>
      <Button
        id="btn-view-qr-code"
        variant="outlined"
        startIcon={<QrCode />}
        onClick={() => setIsOpen(true)}
        fullWidth
      >
        View QR Code
      </Button>

      <AppDialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={<QRCodeTitle sku={sku} />}
        maxWidth="xs"
      >
        <Box sx={{ ...flexColumn, alignItems: "center", gap: 2, pt: 2 }}>
          <Box
            component="img"
            src={qrCode}
            alt={`QR code for ${sku ?? "product"}`}
            sx={{ width: 200, height: 200 }}
          />
          <Button
            onClick={() => setIsOpen(false)}
            sx={{mt:2}}
            variant="outlined"
          >
            Close
          </Button>
        </Box>
      </AppDialog>
    </>
  );
};
