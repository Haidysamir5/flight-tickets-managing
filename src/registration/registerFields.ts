import { FormField } from "@/helpers/types";

const registerFormFields: FormField[] = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "Enter your full name",
    type: "text",
  },
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
export default registerFormFields;
