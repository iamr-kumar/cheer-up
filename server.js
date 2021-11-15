const express = require("express");
const app = express();
const server = require("http").Server(app);
const next = require("next");
const io = require("socket.io")(server);
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
require("dotenv").config();
const connectDB = require("./config/connectDB");
const { loadMessages, sendMessage } = require("./config/messageAction");
const { addUser, findConnectedUser } = require("./config/roomAction");

const PORT = process.env.PORT || 3000;
app.use(express.json());
connectDB();

io.on("connection", (socket) => {
  socket.on("join", async ({ userId }) => {
    const users = await addUser(userId, socket.id);
    setInterval(() => {
      io.emit("connectedUsers", {
        users: users.filter((user) => user.userId !== userId),
      });
    }, 10000);
  });

  socket.on("loadMessages", async ({ userId, messageWith }) => {
    const { chat, user } = await loadMessages(userId, messageWith);
    if (!user) {
      socket.emit("messagesLoaded", { chat });
    } else {
      socket.emit("noChatFound", { user });
    }
  });

  socket.on("sendMessage", async ({ userId, messageTo, text }) => {
    const { error, newMessage } = await sendMessage(userId, messageTo, text);
    const receiverSocket = findConnectedUser(messageTo);

    if (receiverSocket) {
      io.to(receiverSocket.socketId).emit("newMessage", { newMessage });
    }
    if (!error) {
      socket.emit("messageSent", { newMessage });
    }
  });
});

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
  app.use("/api/chats", require("./api/chats/chat"));
  app.all("*", (req, res) => handle(req, res));

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
