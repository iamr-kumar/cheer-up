const mongoose = require("mongoose");
const { Moods } = require("./../api/utils/common");

const MoodHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  moods: {
    type: [String],
    enum: Moods,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  activities: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Activity",
  },
});

const MoodHistory = mongoose.model("MoodHistory", MoodHistorySchema);
module.exports = MoodHistory;
