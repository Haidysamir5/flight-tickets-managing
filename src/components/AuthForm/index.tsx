import {
  MutationFunction,
  MutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { StyledRegistration } from "./styles";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { urls } from "@/helpers";
import { AuthResponseType, FormDataType } from "./types";
import { ObjectSchema } from "yup";
import { FormField } from "@/helpers/type";

interface TFieldValues extends FieldValues {}

type Props = {
  mutationFn: MutationFunction<AuthResponseType, FormDataType>;
  successMessage: string;
  Link: React.ReactNode;
  schema: ObjectSchema<TFieldValues>;
  formFields: FormField[];
  submitText: string;
};
export default function AuthForm({
  mutationFn,
  successMessage,
  Link,
  schema,
  formFields,
  submitText,
}: Props) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertData, setAlertData] = useState<{
    state: "success" | "error";
    message: string;
  }>({
    state: "success",
    message: successMessage,
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const authMutation = useMutation({
    mutationFn: mutationFn,
    onSuccess: (data: AuthResponseType) => {
      if (typeof data === "string")
        setAlertData({ state: "error", message: data });
      else {
        const { accessToken, user } = data;
        queryClient.setQueryData(["user"], user);
        queryClient.setQueryData(["accessToken"], accessToken);
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", JSON.stringify(user));

        setTimeout(() => {
          navigate(urls.home);
        }, 1000);
      }
      setShowAlert(true);
    },
  });

  const onSubmit = (data: any) => {
    authMutation.mutate(data);
  };

  return (
    <Grid
      sx={{ height: "70vh" }}
      container
      justifyContent="center"
      alignContent="center"
    >
      <StyledRegistration container>
        {showAlert && (
          <Alert
            onClose={() => setShowAlert(false)}
            severity={alertData.state}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {alertData.message}
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Grid container gap={3}>
            {formFields.map((input) => {
              return (
                <Controller
                  key={input.name}
                  control={control}
                  name={input.name}
                  render={({ field }) => (
                    <Grid direction="column" gap={1} container>
                      <TextField
                        variant="outlined"
                        label={input.label}
                        placeholder={input.placeholder}
                        type={input.type}
                        {...field}
                      />
                      <Typography color="error">
                        {errors[field.name]?.message as string}
                      </Typography>
                    </Grid>
                  )}
                />
              );
            })}
            <Button
              color="primary"
              type="submit"
              variant="contained"
              fullWidth
              sx={{ borderRadius: "5px" }}
            >
              {submitText}
            </Button>
            {/* <Typography width="100%">
              don't have account ?
              <Link
                to={urls.register}
                color="primary.main"
                style={{ textDecoration: "underline" }}
              >
                Register Now
              </Link>
            </Typography> */}
            {Link}
          </Grid>
        </form>
      </StyledRegistration>
    </Grid>
  );
}