import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { get } from "lodash";
import { NoRowsOverlay } from "./NoRowsOverlay";

export type TColumn<T> = {
  id: string;
  label: string;
  width?: string | number;
  valueGetter?: (row: T) => string;
  cellRenderer?: (value: string, row: T) => React.ReactNode;
};

type TTableListProps<T> = {
  columns: TColumn<T>[];
  rows: T[];
  width?: string;
  height?: string;
  count?: number;
  page?: number;
  onRowClicked?: (row: T) => void;
  onPageChange?: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => void;
};

export const PAGE_SIZE = 20;

export const TableList = <T extends { id: string | number }>({
  columns,
  rows,
  width = "100%",
  height = "auto",
  count,
  page,
  onRowClicked,
  onPageChange,
}: TTableListProps<T>) => {
  const showPagination =
    count && page != null && typeof onPageChange === "function";

  return (
    <Paper>
      <TableContainer component={Box} sx={{ width, height }}>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              {columns.map(({ label }) => (
                <TableCell key={label}>{label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length ? (
              rows.map((row) => (
                <TableRow
                  key={row.id}
                  onClick={() => onRowClicked?.(row)}
                  hover
                >
                  {columns.map((col) => {
                    const value = col.valueGetter
                      ? col.valueGetter(row)
                      : String(get(row, col.id) ?? "");
                    return (
                      <TableCell key={String(col.id)}>
                        {col.cellRenderer
                          ? col.cellRenderer(value, row)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <NoRowsOverlay colSpan={columns.length} />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {showPagination && (
        <TablePagination
          colSpan={3}
          count={count}
          rowsPerPageOptions={[20]}
          rowsPerPage={PAGE_SIZE}
          page={page}
          onPageChange={onPageChange}
          component="div"
        />
      )}
    </Paper>
  );
};
