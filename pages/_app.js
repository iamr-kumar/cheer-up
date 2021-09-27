import { ThemeProvider } from "styled-components";
import theme from "./../src/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
