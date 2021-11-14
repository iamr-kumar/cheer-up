const mongoose = require("mongoose");
const { Moods } = require("./../api/utils/common");

const MoodHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  moods: {
    type: [String],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  activities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "activities",
    },
  ],
});

const MoodHistory = mongoose.model("MoodHistory", MoodHistorySchema);
module.exports = MoodHistory;
