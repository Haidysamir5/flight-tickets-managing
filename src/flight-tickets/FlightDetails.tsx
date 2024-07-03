import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FlightItemType } from "./types";
import { Grid, Typography, useTheme } from "@mui/material";
import { StyledGrid } from "./styles";
import { getFlightTicket } from "./utils/apis";
import { useEffect, useState } from "react";

export default function FlightDetails() {
  const { id } = useParams();
  const { palette } = useTheme();
  const [flight, setFlight] = useState<FlightItemType>();
  const getDetailsMutation = useMutation({
    mutationFn: getFlightTicket,
    onSuccess: (data) => {
      setFlight(data);
    },
  });

  const detailItemStyle = {
    color: palette.grey[900],
    fontWeight: 600,
    marginLeft: 8,
  };

  useEffect(() => {
    getDetailsMutation.mutate(id as string);
  }, [id]);

  return (
    <Grid
      sx={{ minHeight: "70vh" }}
      container
      justifyContent="center"
      alignContent="center"
    >
      <StyledGrid container direction="column">
        <Typography component="h1">Flight Ticket Details</Typography>
        {getDetailsMutation.isPending && <div>Loading...</div>}
        {getDetailsMutation.isError && (
          <Typography color="danger">
            An error occurred: {getDetailsMutation.error.message}
          </Typography>
        )}
        {getDetailsMutation.isSuccess && (
          <div className="details">
            <Typography component="p">
              Id:
              <span style={detailItemStyle}>{flight?.id}</span>
            </Typography>
            <Typography component="p">
              Code:
              <span style={detailItemStyle}>{flight?.code}</span>
            </Typography>
            <Typography component="p">
              Capacity:
              <span style={detailItemStyle}>{flight?.capacity}</span>
            </Typography>
            <Typography component="p">
              Date:
              <span style={detailItemStyle}>{flight?.date}</span>
            </Typography>
          </div>
        )}
      </StyledGrid>
    </Grid>
  );
}
