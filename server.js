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

  app.all("*", (req, res) => handle(req, res));

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
