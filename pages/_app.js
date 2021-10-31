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
  const userProtectedRoutes =
    ctx.pathname === "/user/profile" || ctx.pathname === "/user/activities";
  const userSemiProtectedRoutes = ctx.pathname === "/user/create-profile";
  const therapistProtectedRoutes = ctx.pathname === "/therapist/profile";
  const therapistSemiProtectedRoutes =
    ctx.pathname === "/therapist/create-profile";
  console.log(userSemiProtectedRoutes, userProtectedRoutes);
  if (!token) {
    destroyCookie(ctx, "token");
    (userProtectedRoutes ||
      userSemiProtectedRoutes ||
      therapistProtectedRoutes ||
      therapistSemiProtectedRoutes) &&
      redirectUser(ctx, "/login");
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
        (!userProtectedRoutes ||
          !userSemiProtectedRoutes ||
          !therapistProtectedRoutes ||
          !therapistSemiProtectedRoutes) &&
          redirectUser(ctx, "/login");

      if (user.category === "user") {
        if (user && !profile)
          (userProtectedRoutes || !userSemiProtectedRoutes) &&
            redirectUser(ctx, "/user/create-profile");
        pageProps.user = user;
        if (user && profile)
          (userSemiProtectedRoutes || !userProtectedRoutes) &&
            redirectUser(ctx, "/user/profile");
        pageProps.profile = profile;
      } else {
        if (user && !profile)
          (therapistProtectedRoutes || !therapistSemiProtectedRoutes) &&
            redirectUser(ctx, "/therapist/create-profile");
        pageProps.user = user;
        if (user && profile)
          (therapistSemiProtectedRoutes || !therapistProtectedRoutes) &&
            redirectUser(ctx, "/therapist/profile");
        pageProps.profile = profile;
      }
    } catch (err) {
      console.log(err.message);
      destroyCookie(ctx, "token");
      redirectUser(ctx, "/login");
    }
  }

  return { pageProps };
};

export default MyApp;
