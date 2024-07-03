export interface FormField extends React.InputHTMLAttributes<any> {
  name: "email" | "password" | "fullName";
  label: string;
}

export type UserType = {
  fullName: string;
  email: string;
};

export type FormDataType = {
  email: string;
  password: string;
  fullName?: string;
};
