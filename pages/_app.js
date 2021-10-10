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
  // console.log(token);
  let pageProps = {};
  const protectedRoutes = ctx.pathname === "/user/profile";
  const semiProtectedRoutes = ctx.pathname === "/user/create-profile";
  console.log(semiProtectedRoutes, protectedRoutes);
  if (!token) {
    destroyCookie(ctx, "token");
    (protectedRoutes || semiProtectedRoutes) && redirectUser(ctx, "/login");
  } else {
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    try {
      const res = await axios.get(`${baseUrl}/api/auth`, {
        headers: { "auth-token": token },
      });
      const { user, profile } = res.data;
      if (!user && !profile)
        (!protectedRoutes || !semiProtectedRoutes) &&
          redirectUser(ctx, "/login");
      if (user && !profile)
        (protectedRoutes || !semiProtectedRoutes) &&
          redirectUser(ctx, "/user/create-profile");
      pageProps.user = user;
      if (user && profile)
        (semiProtectedRoutes || !protectedRoutes) &&
          redirectUser(ctx, "/user/profile");
      pageProps.profile = profile;
    } catch (err) {
      console.log(err.message);
      destroyCookie(ctx, "token");
      redirectUser(ctx, "/login");
    }
  }

  return { pageProps };
};

export default MyApp;
