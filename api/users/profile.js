const express = require("express");
const router = express.Router();
const UserProfile = require("../../models/UserProfile");
const TherapistProfile = require("../../models/TherapistProfile");
const auth = require("../../middleware/auth");
const MoodHistory = require("../../models/MoodHistory");
const Journal = require("../../models/Journal");
const { calcMoodPercent } = require("../../config/moodAction");

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ user: req.user.id })
      .populate({
        path: "therapist",
        model: "TherapistProfile",
        populate: {
          path: "user",
          model: "user",
          select: "-password",
        },
      })
      .populate("user");
    const today = new Date();
    const past7Day = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const moodHistory = await MoodHistory.find({
      userId: profile.user,
      date: {
        $gte: past7Day,
        $lt: today,
      },
    }).populate("activities");
    const journals = await Journal.find({
      userId: profile.user,
      date: {
        $gte: past7Day,
        $lt: today,
      },
    });
    let moodPercentage = null;
    if (moodHistory.length > 0 || journals.length > 0) {
      moodPercentage = calcMoodPercent(moodHistory, journals);
    }
    if (profile) {
      return res.json({ profile, moodPercentage });
    } else {
      return res.status(404).json({ msg: "User profile not found" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// create user profile
router.post("/user", async (req, res) => {
  const profileFields = {};
  const { user, medication, issues, city, country } = req.body;

  profileFields.user = user;
  if (medication) {
    profileFields.medication = medication.split(",").map((med) => med.trim());
  }
  if (issues) {
    profileFields.issues = issues.split(",").map((issue) => issue.trim());
  }
  if (city) profileFields.city = city;
  if (country) profileFields.country = country;

  try {
    let userProfile = await UserProfile.findOne({ user: user });
    if (userProfile) {
      userProfile = await UserProfile.findOneAndUpdate(
        { user: user },
        { $set: profileFields },
        { new: true }
      );
      return res.status(200).json(userProfile);
    }

    const newUserProfile = new UserProfile(profileFields);
    await newUserProfile.save();
    return res.status(200).json(newUserProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

// create therapist profile
router.post("/therapist", async (req, res) => {
  const profileFields = {};
  const { user, bio, city, country, mobile } = req.body;
  profileFields.user = user;
  if (bio) profileFields.bio = bio;
  if (city) profileFields.city = city;
  if (country) profileFields.country = country;
  if (mobile) profileFields.mobile = mobile;

  try {
    let therapistProfile = await TherapistProfile.findOne({ user: user });
    if (therapistProfile) {
      therapistProfile = await TherapistProfile.findOneAndUpdate(
        { user: user },
        { $set: profileFields },
        { new: true }
      );
      return res.status(200).json(therapistProfile);
    }
    const newTherapistProfile = new TherapistProfile(profileFields);
    await newTherapistProfile.save();
    return res.status(200).json(newTherapistProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

// Get user profile
router.get("/user/:id", auth, async (req, res) => {
  try {
    const therapist = await TherapistProfile.findOne({ user: req.user.id });
    const userProfile = await UserProfile.findOne({
      user: req.params.id,
    }).populate({ path: "user", mode: "user", select: "-password" });

    if (therapist._id.toString() !== userProfile.therapist.toString()) {
      console.log(therapist._id, userProfile.therapist);
      return res.status(401).json({ msg: "Not Authorized" });
    }
    const today = new Date();
    const past7Day = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const moodHistory = await MoodHistory.find({
      userId: userProfile.user,
      date: {
        $gte: past7Day,
        $lt: today,
      },
    }).populate("activities");
    const activityHistory = moodHistory.map((mood) => {
      return mood.activities.map((activity) => {
        return {
          moods: mood.moods,
          activity,
          date: mood.date,
        };
      });
    });
    const journals = await Journal.find({
      userId: userProfile.user,
      date: {
        $gte: past7Day,
        $lt: today,
      },
    });
    const moodPercentage = calcMoodPercent(moodHistory, journals);
    if (userProfile) {
      return res.json({
        userProfile,
        activityHistory,
        journals,
        moodPercentage,
      });
    } else {
      return res.status(404).json({ msg: "User profile not found" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

// Get therapist profile
router.get("/therapist/:id", async (req, res) => {
  try {
    const therapistProfile = await TherapistProfile.findOne({
      user: req.params.id,
    });
    if (therapistProfile) {
      return res.json(therapistProfile);
    } else {
      return res.status(404).json({ msg: "Therapist profile not found" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
