import { defaultCellRenderer } from "@/components/TableList/cellRenderers/defaultCellRenderer";
import { chipCellRenderer } from "@/components/TableList/cellRenderers/chipCellRenderer";
import { thumbnailCellRenderer } from "@/components/TableList/cellRenderers/thumbnailCellRenderer";
import type { TColumn } from "@/components/TableList/TableList";
import type { TUser } from "@/types/types";

export const employeesColumnDefs: TColumn<TUser>[] = [
  {
    id: "image",
    label: "",
    cellRenderer: thumbnailCellRenderer,
  },
  {
    id: "firstName",
    label: "Name",
    valueGetter: (row) => `${row.firstName} ${row.lastName}`,
    cellRenderer: defaultCellRenderer,
  },
  {
    id: "company.department",
    label: "Department",
    cellRenderer: chipCellRenderer,
  },
  {
    id: "company.title",
    label: "Title",
    cellRenderer: defaultCellRenderer,
  },
  {
    id: "email",
    label: "Email",
    cellRenderer: defaultCellRenderer,
  },
  {
    id: "phone",
    label: "Phone",
    cellRenderer: defaultCellRenderer,
  },
];
