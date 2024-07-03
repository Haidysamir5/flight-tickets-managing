import { useState } from "react";
import { Button, Grid, Menu, MenuItem, useTheme } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { UserType } from "@/helpers/type";
import { useNavigate } from "react-router-dom";
import { urls } from "@/helpers";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { StyledMenu } from "./styles";

export default function UserMenu() {
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
      direction="row"
      container
      width="100%"
      wrap="nowrap"
      padding={2}
      sx={{ borderBottom: `1px solid ${palette?.primary?.dark}` }}
      justifyContent="end"
    >
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
  );
}
