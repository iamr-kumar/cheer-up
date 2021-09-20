import { ThemeProvider } from "styled-components";
import theme from "./../src/theme";
import "../styles/globals.css";
import AuthProvider from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />;
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
