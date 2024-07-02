import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Grid, Button, Snackbar, Alert } from "@mui/material";
import Modal from "@/components/Modal";
import { formatDate } from "@/helpers";
import TicketsList from "./components/TicketsList";
import TicketForm from "./components/TicketForm";
import { deleteFlightTicket, getFlightTickets } from "./apis";
import { FlightItemType } from "./types";

export default function FlightTickets() {
  const queryClient = useQueryClient();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [formState, setFormState] = useState<"edit" | "new">("new");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [formDefaultValues, setFormDefaultValues] = useState<
    Partial<FlightItemType>
  >({
    date: formatDate({ value: new Date().toISOString() }),
  });

  const { data, error, isLoading } = useQuery({
    queryKey: ["tickets"],
    queryFn: getFlightTickets,
  });

  const deleteTicketMutation = useMutation({
    mutationFn: deleteFlightTicket,
    onSuccess: (deletedId) => {
      // queryClient.prefetchQuery({
      //   queryKey: ["tickets"],
      // });
      queryClient.setQueryData(
        ["tickets"],
        (prevTickets: FlightItemType[] | undefined) =>
          prevTickets?.filter((ticket) => ticket.id != deletedId) || prevTickets
      );
      setSuccessMessage(`ticket  is deleted successfully`);
    },
  });

  const onFormSuccess = (message: string) => {
    setSuccessMessage(message);
    setOpenModal(false);
    setOpenSnackbar(true);
  };

  const onEditTicket = (editedTicket: FlightItemType) => {
    setFormDefaultValues(editedTicket);
    setFormState("edit");
    setOpenModal(true);
  };

  const onDeleteTicket = (id: string) => {
    deleteTicketMutation.mutate(id);
  };

  if (error) return <div>Request Failed</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <Grid direction="column" container gap={2}>
      <Button
        variant="contained"
        sx={{ width: "fit-content" }}
        onClick={() => setOpenModal(true)}
      >
        + Add New
      </Button>
      <TicketsList
        tickets={data}
        onEditTicket={onEditTicket}
        onDeleteTicket={onDeleteTicket}
      />
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={openSnackbar}
        autoHideDuration={2000}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
      <Modal
        title="Add New Ticket"
        open={openModal}
        setOpenModal={setOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TicketForm
          onFormSuccess={onFormSuccess}
          defaultValues={formDefaultValues}
          state={formState}
        />
      </Modal>
    </Grid>
  );
}
