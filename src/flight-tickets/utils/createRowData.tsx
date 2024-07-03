import { FlightItemType } from "../types";

export default function createRowData(item: FlightItemType): {
  key: string;
  label: string | number;
}[] {
  return [
    { key: "id", label: item.id },
    { key: "code", label: item.code },
    {
      key: "Date",
      label: item.date,
    },
    { key: "capacity", label: item.capacity },
  ];
}
