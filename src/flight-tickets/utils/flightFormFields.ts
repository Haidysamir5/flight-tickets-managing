import { FieldValues } from "react-hook-form";

interface FormFields extends FieldValues {}

const flightFormFields: FormFields[] = [
  {
    name: "code",
    label: "code",
    placeholder: "Enter Flight Code",
    type: "text",
  },
  {
    name: "capacity",
    label: "capacity",
    placeholder: "Enter Flight Capacity",
    type: "number",
  },
  {
    name: "date",
    label: "date",
    placeholder: "Enter Flight Date",
    type: "date",
  },
];

export default flightFormFields;
