const router = require("express").Router();
const auth = require("../../middleware/auth");
const ChatModel = require("../../models/ChatModel");

// GET ALL CHATS
router.get("/", auth, async (req, res) => {
  if (req.user.category !== "therapist") {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  try {
    const { id } = req.user;
    const allChats = await ChatModel.findOne({ user: id }).populate(
      "chats.messageWith"
    );

    let chatsToBeSent = [];
    if (allChats.chats.length > 0) {
      chatsToBeSent = allChats.chats.map((chat) => ({
        messageWith: chat.messageWith._id,
        name: chat.messageWith.name,
        email: chat.messageWith.email,
        lastMessage: chat.messages[chat.messages.length - 1].msg,
        date: chat.messages[chat.messages.length - 1].date,
      }));
    }
    return res.status(200).json({ chats: chatsToBeSent });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
