import { Grid, styled } from "@mui/material";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  width: 500,
  textAlign: "start",
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  "& h1": {
    fontSize: 30,
    fontWeight: 600,
  },
  "& .details": {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    borderRadius: 4,
  },
}));
