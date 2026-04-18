import { QRCodeWithButton } from "@/components/QRCodeWithButton";
import { flexCenter, flexColumn } from "@/styles/mixins";
import { Box, Divider, Typography } from "@mui/material";
import Barcode from "react-barcode";

type TProductIdentificationProps = {
  sku?: string;
  barcode?: string;
  qrCode?: string;
};

export const ProductIdentification = ({
  sku,
  barcode,
  qrCode,
}: TProductIdentificationProps) => {
  return (
    <>
      <Box sx={{ ...flexColumn, gap: 1 }}>
        <Typography variant="caption" color="text.secondary" fontWeight={600}>
          Identification
        </Typography>

        <Typography variant="body2" color="text.primary">
          SKU:
          <Typography
            component="span"
            variant="body2"
            fontWeight={600}
            sx={{ ml: 1 }}
          >
            {sku}
          </Typography>
        </Typography>

        <Divider />
        {barcode && (
          <Box sx={{ ...flexCenter }}>
            <Barcode
              value={barcode}
              width={1.2}
              height={50}
              fontSize={11}
              background="transparent"
              lineColor="#ffffff"
            />
          </Box>
        )}
        <QRCodeWithButton qrCode={qrCode} sku={sku} />
      </Box>
    </>
  );
};
