import { Link } from "react-router-dom";

import { object, string } from "yup";
import { Typography } from "@mui/material";
import { urls } from "@/helpers";
import { loginUser } from "./apis";
import loginFormFields from "./formFields";
import AuthForm from "@/components/AuthForm";

let schema = object().shape({
  email: string()
    .lowercase()
    .trim()
    .required()
    .matches(/[^@]+[.]*[^@]*@[^@]+[.]+[^@]+/, "Must be a valid email"),
  password: string().required(),
});

export default function Login() {
  return (
    <AuthForm
      formFields={loginFormFields}
      mutationFn={loginUser}
      schema={schema}
      successMessage="logged in successfully "
      submitText="Login"
      Link={
        <Typography width="100%">
          don't have account ?
          <Link
            to={urls.register}
            color="primary.main"
            style={{ textDecoration: "underline" }}
          >
            Register Now
          </Link>
        </Typography>
      }
    />
  );
}
