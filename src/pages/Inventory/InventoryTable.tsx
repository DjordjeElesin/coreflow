import { Loading } from "@/components/Loading";
import { TableList } from "@/components/TableList";
import type { TColumn } from "@/components/TableList/TableList";
import type { TProduct } from "@/types/types";
import type { MouseEvent } from "react";

type TInventoryTableProps = {
  isLoading: boolean;
  columns: TColumn<TProduct>[];
  data: TProduct[];
  count?: number;
  page: number;
  onRowClicked?: (row: TProduct) => void;
  onPageChange: (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
};

export const InventoryTable = ({
  isLoading,
  columns,
  data,
  count,
  page,
  onRowClicked,
  onPageChange,
}: TInventoryTableProps) => {
  if (isLoading) return <Loading />;

  return (
    <TableList
      columns={columns}
      rows={data}
      count={count}
      page={page}
      onRowClicked={onRowClicked}
      onPageChange={onPageChange}
    />
  );
};
