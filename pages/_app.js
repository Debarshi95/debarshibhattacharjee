import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

const theme = {
  primary: "#d31027",
  textPrimary: "#000",
  textSecondary: "#fff",
};

const darkTheme = {
  primary: "",
  secondary: "",
  textPrimary: "#fff",
  textSecondary: "",
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
