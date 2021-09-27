import axios from "axios";
import Router from "next/router";
import cookie from "js-cookie";

export const regitserUser = async (user) => {
  try {
    const res = await axios.post("/api/signup", user);
    setToken(res.data);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const loginUser = async (user) => {
  try {
    const res = await axios.post("/api/auth", user);
    setToken(res.data.token);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
};

const setToken = (token) => {
  cookie.set("token", token, { expires: 1 });
};
