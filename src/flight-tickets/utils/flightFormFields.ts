interface FormFields extends React.InputHTMLAttributes<any> {
  label: string;
  name: "code" | "capacity" | "date";
}

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
