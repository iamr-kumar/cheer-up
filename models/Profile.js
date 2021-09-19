const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  address: {
    type: String,
  },
  medication: {
    type: Boolean,
    default: false,
  },
  problems: {
    type: [String],
    required: true,
  },
  therapist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Profile = mongoose.model("patient", ProfileSchema);

module.exports = Profile;
