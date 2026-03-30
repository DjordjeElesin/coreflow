import { format } from "date-fns";

export const createdAtCellRenderer = (createdAt: string) =>
  format(new Date(createdAt), "PP");
