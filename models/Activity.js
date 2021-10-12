const mongoose = require("mongoose");

const ActivtiesSchema = new mongoose.Schema({
  title: {
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
  moods: [String],
});

module.exports = Activtiy = mongoose.model("Activities", ActivtiesSchema);
