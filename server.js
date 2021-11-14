const express = require("express");
const app = express();
const server = require("http").Server(app);
const next = require("next");

const dev = process.env.NODE_ENV !== "production";

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

require("dotenv").config();

const connectDB = require("./config/connectDB");

const PORT = process.env.PORT || 3000;
app.use(express.json());
connectDB();

nextApp.prepare().then(() => {
  app.use("/api/signup", require("./api/auth/signup"));
  app.use("/api/auth", require("./api/auth/auth"));
  app.use("/api/user", require("./api/users/activity"));
  app.use("/api/user/journal", require("./api/users/journal"));
  app.use("/api/user-therapist", require("./api/users/therapist"));
  app.use("/api/profile", require("./api/users/profile"));
  app.use("/api/activities", require("./api/activity/activity"));
  app.use("/api/therapist/request", require("./api/therapist/request"));
  app.use("/api/therapist/clients", require("./api/therapist/client"));
  app.all("*", (req, res) => handle(req, res));

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
