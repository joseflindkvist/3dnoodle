import { createTheme } from "@mui/material";

export  const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#23A6E5",
    },
    secondary: {
      main: "#335566",
    },
  },
  typography: {
    
    fontFamily: ["Chilanka", "Monsterrat"].join(","),
  },
  shape: {
    borderRadius: 4,
  },
});
