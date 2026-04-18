import { chipCellRenderer } from "@/components/TableList/cellRenderers/chipCellRenderer";
import { defaultCellRenderer } from "@/components/TableList/cellRenderers/defaultCellRenderer";
import { InventoryCorrectionCellRenderer } from "@/components/TableList/cellRenderers/inventoryCorrectionCellRenderer";
import { priceCellRenderer } from "@/components/TableList/cellRenderers/priceCellRenderer";
import { ratingCellRenderer } from "@/components/TableList/cellRenderers/ratingCellRenderer";
import { stockNumberCellRenderer } from "@/components/TableList/cellRenderers/stockNumberCellRenderer";
import { thumbnailCellRenderer } from "@/components/TableList/cellRenderers/thumbnailCellRenderer";
import type { TColumn } from "@/components/TableList/TableList";
import type { TProduct } from "@/types/types";

export const inventoryColumnDefs: TColumn<TProduct>[] = [
  {
    id: "thumbnail",
    label: "",
    cellRenderer: thumbnailCellRenderer,
  },
  {
    id: "title",
    label: "Product",
    cellRenderer: defaultCellRenderer,
  },
  {
    id: "brand",
    label: "BRAND",
    cellRenderer: defaultCellRenderer,
  },
  {
    id: "category",
    label: "CATEGORY",
    cellRenderer: chipCellRenderer,
  },
  {
    id: "price",
    label: "PRICE",
    cellRenderer: priceCellRenderer,
  },
  {
    id: "rating",
    label: "RATING",
    cellRenderer: ratingCellRenderer,
  },
  {
    id: "stock",
    label: "STOCK",
    cellRenderer: stockNumberCellRenderer,
  },
  {
    id: "id",
    label: "",
    cellRenderer: InventoryCorrectionCellRenderer,
  },
];
