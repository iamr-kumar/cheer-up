import { ThemeProvider } from "styled-components";
import theme from "./../src/theme";
import "../styles/globals.css";
import { parseCookies, destroyCookie } from "nookies";
import { redirectUser } from "../utils/authUser";
import axios from "axios";
import { baseUrl } from "../utils/config";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { token } = parseCookies(ctx);
  let pageProps = {};
  // const protectedRoutes = ctx.pathname === "/user/profile";
  // const semiProtectedRoutes = ctx.pathname === "/user/create-profile";
  // if (!token) {
  //   destroyCookie(ctx, "token");
  //   (protectedRoutes || semiProtectedRoutes) && redirectUser(ctx, "/login");
  // }
  // else {
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }
  //   try {
  //     const res = await axios.get(`${baseUrl}/api/auth`, {
  //       headers: { "auth-token": token },
  //     });
  //     const { user, profile } = res.data;
  //     if (!profile && user) {
  //       pageProps.user = user;
  //       protectedRoutes && redirectUser(ctx, "/user/create-profile");
  //     }

  //     if (user && profile) {
  //       (!protectedRoutes || !semiProtectedRoutes) &&
  //         redirectUser(ctx, "/user/profile");
  //       pageProps = { user, profile };
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //     destroyCookie(ctx, "token");
  //     redirectUser(ctx, "/login");
  //   }
  // }

  return { pageProps };
};

export default MyApp;
