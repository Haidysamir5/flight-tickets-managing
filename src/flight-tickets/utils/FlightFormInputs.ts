import { FieldValues } from "react-hook-form";

interface FormInputType extends FieldValues {}

const FlightFormInputs: FormInputType[] = [
  {
    name: "code",
    label: "code",
    placeholder: "Enter Flight Code",
    autoFocus: true,
    type: "text",
  },
  {
    name: "capacity",
    label: "capacity",
    placeholder: "Enter Flight Capacity",
    autoFocus: true,
    type: "number",
  },
  {
    name: "date",
    label: "date",
    placeholder: "Enter Flight Date",
    autoFocus: true,
    type: "date",
  },
];

export default FlightFormInputs;
