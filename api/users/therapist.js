const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const TherapistProfile = require("../../models/TherapistProfile");
const UserProfile = require("../../models/UserProfile");
const User = require("../../models/User");
const Request = require("../../models/Request");

router.get("/suggested", auth, async (req, res) => {
  try {
    const user = req.user;
    const userProfile = await UserProfile.findOne({
      user: user.id,
    });
    const therapistProfile = await TherapistProfile.find({
      city: userProfile.city,
    }).populate("user", ["name"]);

    return res.json({ therapistProfile });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/search", auth, async (req, res) => {
  try {
    const search = req.query.searchText;
    const therapists = await User.find({
      name: { $regex: search, $options: "i" },
      category: "therapist",
    }).select("-password");
    const therapistProfiles = [];
    for (const therapist of therapists) {
      const profile = await TherapistProfile.findOne({ user: therapist._id });
      therapistProfiles.push({ ...profile._doc, name: therapist.name });
    }

    return res.json({ therapistProfiles });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/connect", auth, async (req, res) => {
  const user = req.user;
  const therapistId = req.body.therapistId;
  const message = req.body.message;
  try {
    const userProfile = await UserProfile.findOne({
      user: user.id,
    });
    if (userProfile.therapist) {
      return res.status(400).json({ message: "You already have a therapist" });
    }
    const pendingRequest = await Request.findOne({
      user: user.id,
      status: "pending",
    });
    if (pendingRequest) {
      return res
        .status(400)
        .json({ message: "You already have a pending request" });
    }
    const request = new Request({
      user: user.id,
      therapist: therapistId,
      message: message,
    });
    await request.save();
    return res.json({ message: "Request sent successfully" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: "Could not send request" });
  }
});

module.exports = router;
