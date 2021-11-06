const mongoose = require("mongoose");
const { Moods } = require("../api/utils/common");

const ActivitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  moods: {
    type: [String],
    required: true,
    enum: Moods,
  },
});

const Activity = mongoose.model("activities", ActivitySchema);
module.exports = Activity;
