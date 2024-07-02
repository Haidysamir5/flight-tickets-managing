type OptionsType = {
  value: string;
};

export default function formatDate({ value }: OptionsType): string {
  if (value) {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const monthFormat = (month + 1).toString().padStart(2, "0");
    const dayFormat = day.toString().padStart(2, "0");
    return `${year}-${monthFormat}-${dayFormat}`;
  }
  return "";
}
