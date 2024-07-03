import { createTheme } from "@mui/material/styles";
import { breakpoints } from "./breakpoints";

const theme = createTheme({
  breakpoints: {
    values: { ...breakpoints },
  },
});

export default theme;
