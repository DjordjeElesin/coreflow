import { useGetProductByIdQuery } from "@/api/endpoints/inventoryEndpoints/inventoryEndpoints";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Loading } from "@/components/Loading";
import { DetailsPageContainer } from "@/layouts/DetailsPageContainer";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

const mapItemsToImages = (images?: string[], title?: string) => {
  if (!images || !title) return;
  return images.map((img, index) => ({
    src: img,
    alt: `${title}-${index}`,
  }));
};

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetProductByIdQuery({ id });

  const imageObjects = useMemo(
    () => mapItemsToImages(data?.images, data?.title),
    [data],
  );

  if (isLoading) return <Loading fullScreen={false} />;

  return (
    <DetailsPageContainer
      backToText="Back To Inventory"
      content={
        <>
          <ImageCarousel images={imageObjects} />
        </>
      }
    />
  );
};
