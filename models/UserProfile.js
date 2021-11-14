const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
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
    ref: "TherapistProfile",
  },
});

module.exports = UserProfile = mongoose.model("UserProfile", UserProfileSchema);
