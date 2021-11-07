const mongoose = require("mongoose");

const TherapistProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
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
  client: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  rating: {
    type: Number,
  },
});

module.exports = mongoose.model("TherapistProfile", TherapistProfileSchema);
