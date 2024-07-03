import * as React from "react";
import { Container, Grid } from "@mui/material";
import UserMenu from "./UserMenu";

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
      <UserMenu />
      <Container maxWidth="xl">{children}</Container>
    </Grid>
  );
}
