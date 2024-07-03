import { Link } from "react-router-dom";
import { object, string } from "yup";
import { Typography } from "@mui/material";
import { urls } from "@/helpers";
import registerFormFields from "./registerFields";
import { registerUser } from "./apis";
import AuthForm from "@/components/AuthForm";

const registerSchema = object().shape({
  fullName: string().required(),
  email: string()
    .lowercase()
    .trim()
    .required()
    .matches(/[^@]+[.]*[^@]*@[^@]+[.]+[^@]+/, "Must be a valid email"),
  password: string().required(),
});

export default function Registration() {
  return (
    <AuthForm
      title="Register "
      formFields={registerFormFields}
      mutationFn={registerUser}
      schema={registerSchema}
      successMessage="you successfully registered "
      submitText="Submit"
      Link={
        <Typography width="100%">
          already have account ?{" "}
          <Link
            to={urls.login}
            color="primary.main"
            style={{ textDecoration: "underline" }}
          >
            Login Now
          </Link>
        </Typography>
      }
    />
  );
}
