import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Container, Grid, MenuItem, useTheme } from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { useQueryClient } from "@tanstack/react-query";
import { UserType } from "@/helpers/types";
import LogoutIcon from "@mui/icons-material/Logout";
import { urls } from "@/helpers";
import { StyledMenu } from "./styles";

export default function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { palette } = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const user: UserType | undefined = queryClient.getQueryData(["user"]);

  const handleLogout = () => {
    localStorage.clear();
    queryClient.clear();
    navigate(urls.login);
  };
  return (
    <Grid
      direction="column"
      container
      height="100vh"
      width="100%"
      wrap="nowrap"
      gap={4}
    >
      <Grid
        direction="row"
        container
        width="100%"
        wrap="nowrap"
        padding={2}
        sx={{ borderBottom: `1px solid ${palette?.primary?.dark}` }}
        justifyContent="space-between"
      >
        <Link
          to={urls.flights}
          style={{ color: palette?.primary?.dark, position: "relative" }}
        >
          Flights
        </Link>

        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: palette?.primary?.dark, position: "relative" }}
          size="small"
        >
          {user?.fullName}
          <ArrowDropDown />
        </Button>
        <StyledMenu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleLogout}>
            <LogoutIcon />
            Logout
          </MenuItem>
        </StyledMenu>
      </Grid>
      <Container maxWidth="xl">{children}</Container>
    </Grid>
  );
}
