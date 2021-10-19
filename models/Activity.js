const mongoose = require("mongoose");

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
  },
});

const Activity = mongoose.model("activities", ActivitySchema);
module.exports = Activity;
