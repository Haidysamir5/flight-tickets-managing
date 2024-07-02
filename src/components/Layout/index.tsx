import * as React from "react";
import {
  Button,
  Container,
  Grid,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { palette } = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      direction="column"
      container
      height="100vh"
      width="100%"
      wrap="nowrap"
      gap={3}
    >
      <Grid
        direction="row"
        container
        width="100%"
        wrap="nowrap"
        padding={2}
        sx={{ borderBottom: `1px solid ${palette?.primary?.dark}` }}
      >
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: palette?.primary?.dark }}
          size="small"
        >
          Profile
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Grid>
      <Container maxWidth="xl">{children}</Container>
    </Grid>
  );
}
