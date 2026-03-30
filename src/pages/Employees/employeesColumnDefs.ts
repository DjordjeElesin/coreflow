import { defaultCellRenderer } from "@/components/TableList/cellRenderers/defaultCellRenderer";
import { departmentChipCellRenderer } from "@/components/TableList/cellRenderers/departmentChipCellRenderer";
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
    cellRenderer: departmentChipCellRenderer,
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
