import { FormField } from "@/helpers/type";

const loginFormFields: FormField[] = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    name: "password",
    label: "password",
    placeholder: "Enter a password",
    type: "password",
  },
];

export default loginFormFields;
