import { useGetProductByIdQuery } from "@/api/endpoints/inventoryEndpoints/inventoryEndpoints";
import { ImageCarousel } from "@/components/ImageCarousel";
import { formatCurrency } from "@/utils/formatCurrency";
import { Box, Chip, Paper, Rating, Typography } from "@mui/material";
import startCase from "lodash/startCase";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ProductStockCorrection } from "./ProductStockCorrection";
import { ProductIdentification } from "./ProductIdentification";
import { flexColumn } from "@/styles/mixins";

const mapItemsToImages = (images?: string[], title?: string) => {
  if (!images || !title) return;
  return images.map((img, index) => ({
    src: img,
    alt: `${title}-${index}`,
  }));
};

export const ProductDetailsContent = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetProductByIdQuery({ id }, { skip: !id });

  const imageObjects = useMemo(
    () => mapItemsToImages(data?.images, data?.title),
    [data],
  );

  return (
    <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 2.3 }}>
        <ImageCarousel
          images={imageObjects ?? []}
          objectFit="contain"
          sx={{ width: "80%", alignSelf: "center" }}
        />
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            p: 2,
            flex: 1,
          }}
        >
          <Typography variant="h3">{data?.title}</Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {data?.tags.map((tag) => (
              <Chip key={tag} label={startCase(tag)} />
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Rating value={data?.rating ?? 0} name="read-only" readOnly />
            <Typography variant="subtitle1" fontWeight={600}>
              {data?.rating !== undefined
                ? Number(data.rating).toFixed(1)
                : "0.0"}
              <Typography
                variant="subtitle2"
                component="span"
                color="text.secondary"
                sx={{ ml: 1 }}
              >
                &bull; {data?.brand}
              </Typography>
            </Typography>
          </Box>

          <Typography variant="h2" color="primary">
            {formatCurrency(data?.price ?? 0)}
          </Typography>
          <Typography variant="body1">{data?.description}</Typography>
        </Paper>
      </Box>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          flex: 0.7,
          p: 2,
        }}
      >
        <ProductStockCorrection productId={data?.id} stock={data?.stock} />
        <ProductIdentification
          sku={data?.sku}
          barcode={data?.meta.barcode}
          qrCode={data?.meta.qrCode}
        />
        <Box sx={{ ...flexColumn, gap: 1 }}>
          <Typography variant="caption" fontWeight={600} color="text.secondary">
            Order Policies
          </Typography>
          <Chip label={data?.warrantyInformation} sx={{ width: "100%" }} />
          <Chip label={data?.returnPolicy} sx={{ width: "100%" }} />
          <Chip label={data?.shippingInformation} sx={{ width: "100%" }} />
        </Box>
      </Paper>
    </Box>
  );
};
