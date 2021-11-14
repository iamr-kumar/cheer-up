const ChatModel = require("../models/ChatModel");

const loadMessages = async (userId, messageWith) => {
  try {
    const userChats = await ChatModel.findOne({ user: userId }).populate(
      "chats.messageWith"
    );
    const chat = userChats.chats.find(
      (chat) => chat.messageWith._id.toString() === messageWith
    );
    if (!chat) {
      return { error: "Chat not found" };
    }
    return { chat };
  } catch (err) {
    console.log(err);
    return { err };
  }
};

const sendMessage = async (userId, messageWith, message) => {
  try {
    const user = await ChatModel.findOne({ user: userId });
    if (!user) {
      return { error: "User not found" };
    }
    const messageToUser = await ChatModel.findOne({ user: messageWith });
    if (!messageToUser) {
      return { error: "User not found" };
    }
    const newMessage = {
      msg: message,
      sender: userId,
      receiver: messageWith,
      date: Date.now(),
    };

    const prevChat = user.chats.find(
      (chat) => chat.messageWith._id.toString() === messageWith
    );
    if (prevChat) {
      prevChat.messages.push(newMessage);
      await user.save();
    } else {
      const newChat = {
        messageWith,
        messages: [newMessage],
      };
      user.chats.unshift(newChat);
      await user.save();
    }

    const prevChatForRec = messageToUser.chats.find(
      (chat) => chat.messageWith._id.toString() === userId
    );
    if (prevChatForRec) {
      prevChatForRec.messages.push(newMessage);
      await messageToUser.save();
    } else {
      const newChat = {
        messageWith: userId,
        messages: [newMessage],
      };
      messageToUser.chats.unshift(newChat);
      await messageToUser.save();
    }
    return { newMessage };
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

module.exports = { loadMessages, sendMessage };
