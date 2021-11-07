const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  medication: {
    type: [String],
  },
  issues: {
    type: [String],
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  therapist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = UserProfile = mongoose.model("UserProfile", UserProfileSchema);
