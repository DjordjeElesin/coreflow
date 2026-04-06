import { Typography } from "@mui/material";

export const priceCellRenderer = (value: string) => {
  const price = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(Number(value));
  return <Typography variant="h6">{price}</Typography>;
};
