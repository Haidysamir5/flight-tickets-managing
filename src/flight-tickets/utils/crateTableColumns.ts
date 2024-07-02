export default function crateTableColumns(): { key: string; label: string }[] {
  return [
    {
      key: "id",
      label: "Id",
    },
    {
      key: "code",
      label: "Code",
    },
    {
      key: "date",
      label: "Date",
    },
    {
      key: "capacity",
      label: "Capacity",
    },
    {
      key: "actions",
      label: "Actions",
    },
  ];
}
