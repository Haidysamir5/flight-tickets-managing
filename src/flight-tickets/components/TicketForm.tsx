import {
  Button,
  CircularProgress,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { number, object, string } from "yup";
import flightFormFields from "../utils/flightFormFields";
import { FlightItemType } from "../types";
import { createFlightTicket, editFlightTicket } from "../apis";
import { useEffect } from "react";

let ticketSchema = object().shape({
  code: string().required(),
  capacity: number().positive().integer().required(),
  date: string().required(),
});

type Props = {
  onFormSuccess?: (message: string) => void;
  defaultValues: Partial<FlightItemType>;
  state: "new" | "edit";
};

export default function TicketForm({
  onFormSuccess,
  defaultValues,
  state,
}: Props) {
  const queryClient = useQueryClient();

  const createTicketMutation = useMutation({
    mutationFn: createFlightTicket,
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["tickets"],
        (prevTickets: FlightItemType[] | undefined) =>
          prevTickets ? [data, ...prevTickets] : [data]
      );
      if (onFormSuccess) onFormSuccess("ticket is added successfully");
    },
  });

  const editTicketMutation = useMutation({
    mutationFn: editFlightTicket,
    onSuccess: () => {
      queryClient.prefetchQuery({
        queryKey: ["tickets"],
      });
      if (onFormSuccess)
        onFormSuccess(`ticket ${defaultValues.id} is edited successfully`);
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(ticketSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    if (state === "edit") editTicketMutation.mutate(data);
    else createTicketMutation.mutate(data);
    console.log(data);
  };

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  return (
    <Grid container>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Grid container gap={3}>
          {createTicketMutation.isError ? (
            <Typography color="danger">
              An error occurred: {createTicketMutation.error.message}
            </Typography>
          ) : null}
          {flightFormFields.map((input) => {
            return (
              <Controller
                key={input.name}
                control={control}
                name={input.name}
                render={({ field }) => (
                  <Grid direction="column" gap={1} container>
                    <TextField variant="outlined" {...input} {...field} />
                    <Typography color="error">
                      {errors[field.name]?.message as string}
                    </Typography>
                  </Grid>
                )}
              />
            );
          })}
          <Button
            color="success"
            type="submit"
            variant="contained"
            fullWidth
            sx={{ borderRadius: "5px" }}
          >
            {createTicketMutation.isPending && (
              <CircularProgress sx={{ color: "white" }} />
            )}
            Submit
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}
