import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { createRowData, crateTableColumns } from "@/flight-tickets/utils";
import { FlightItemType } from "../types";
import { Link } from "react-router-dom";

type Props = {
  tickets: FlightItemType[];
  onEditTicket: (ticket: FlightItemType) => void;
  onDeleteTicket: (id: string) => void;
};
export default function FlightList({
  tickets,
  onEditTicket,
  onDeleteTicket,
}: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "primary.main" }}>
          <TableRow>
            {crateTableColumns().map((column) => {
              return (
                <TableCell
                  key={`head-colum-${column.key}-`}
                  sx={{ color: "white" }}
                >
                  {column.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              key={`body-row-${ticket.id}-`}
            >
              {createRowData(ticket).map((cell) => {
                return (
                  <TableCell
                    component="th"
                    scope="row"
                    key={`body-cell-${cell.key}-`}
                  >
                    <Link to={`flight/${ticket.id}`} style={{ color: "black" }}>
                      {" "}
                      {cell.label}
                    </Link>
                  </TableCell>
                );
              })}
              <TableCell component="th" scope="row">
                <Grid container gap={1}>
                  <IconButton
                    aria-label="edit"
                    size="medium"
                    onClick={() => onEditTicket(ticket)}
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="edit"
                    size="medium"
                    onClick={() => onDeleteTicket(ticket.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
