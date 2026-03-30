import { Loading } from "@/components/Loading";
import { TableList } from "@/components/TableList";
import type { TColumn } from "@/components/TableList/TableList";
import type { TUser } from "@/types/types";
import type { MouseEvent } from "react";

type TProductsTableProps = {
  isLoading: boolean;
  columns: TColumn<TUser>[];
  data: TUser[];
  count?: number;
  page: number;
  onRowClicked?: (row: TUser) => void;
  onPageChange: (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
};

export const EmployeesTable = ({
  isLoading,
  columns,
  data,
  count,
  page,
  onRowClicked,
  onPageChange,
}: TProductsTableProps) => {
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
