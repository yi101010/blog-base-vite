import { GridColDef } from "@mui/x-data-grid";

export const MASTER_COLUMN_ITEM: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    headerAlign: "left",
    align: "right",
    flex: 1,
  },
  {
    field: "itemCode",
    headerName: "Code",
    headerAlign: "left",
    align: "left",
    flex: 2,
  },
  {
    field: "itemName",
    headerName: "Name",
    headerAlign: "left",
    align: "left",
    flex: 4,
  },
  {
    field: "cost",
    headerName: "Cost",
    headerAlign: "left",
    align: "right",
    flex: 1,
  },
  {
    field: "updatedBy",
    headerName: "Updated By",
    headerAlign: "left",
    align: "left",
    flex: 2,
  },
  {
    field: "moodifiedDate",
    headerName: "Modified Date",
    headerAlign: "left",
    align: "center",
    flex: 2,
  },
];
