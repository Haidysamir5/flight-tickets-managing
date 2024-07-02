import { createTheme } from "@mui/material/styles";
import { breakpoints } from "./breakpoints";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  breakpoints: {
    values: { ...breakpoints },
  },
});

export default theme;
