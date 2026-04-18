import { useGetProductByIdQuery } from "@/api/endpoints/inventoryEndpoints/inventoryEndpoints";
import { Loading } from "@/components/Loading";
import { DetailsPageContainer } from "@/layouts/DetailsPageContainer";
import { useParams } from "react-router-dom";
import { ProductDetailsContent } from "./ProductDetailsContent";

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading } = useGetProductByIdQuery({ id });

  return (
    <DetailsPageContainer
      backToText="Back To Inventory"
      contentSx={{
        flexDirection: "column",
        gap: 2,
        width: "100%",
      }}
      content={<ProductDetailsContent />}
      extra={<Loading isLoading={isLoading} />}
    />
  );
};
