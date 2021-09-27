const mongoose = require("mongoose");

const TherapistProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bio: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  mobile: {
    type: Number,
  },
});

module.exports = mongoose.model("TherapistProfile", TherapistProfileSchema);
