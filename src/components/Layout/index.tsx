import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import UserMenu from "./UserMenu";
import { urls } from "@/helpers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid
      direction="column"
      container
      height="100vh"
      width="100%"
      wrap="nowrap"
      gap={4}
    >
      <Link to={urls.home}>Flights</Link>
      <UserMenu />
      <Container maxWidth="xl">{children}</Container>
    </Grid>
  );
}
