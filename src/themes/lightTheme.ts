import { createTheme } from "@mui/material"

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#e4e5f1",
    },
    secondary: {
      main: "#d300dc",
    },
    divider: "#999",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "inherit",
        },
      },
    },
  },
})
