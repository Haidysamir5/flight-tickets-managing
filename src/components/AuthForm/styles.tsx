import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledRegistration = styled(Grid)(({ theme }) => ({
  width: 500,
  backgroundColor: theme.palette.grey[100],
  padding: theme.spacing(3),
  gap: theme.spacing(2),
  borderRadius: 4,
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
