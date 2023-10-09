import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { themeMain } from "@/styles/styles";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themeMain}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
