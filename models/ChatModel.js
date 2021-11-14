const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  cahts: [
    {
      messageWith: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      messages: [
        {
          msg: { type: String, required: true },
          sender: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
          reciever: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
          date: { type: Date, default: Date.now },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("chat", ChatSchema);
