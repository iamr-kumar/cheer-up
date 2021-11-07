const express = require("express");
const router = express.Router();
const Activity = require("../../models/Activity");
const auth = require("../../middleware/auth");
const analyzeTone = require("../../config/watson");
const MoodHistory = require("../../models/MoodHistory");

router.post("/analyze-tone", auth, async (req, res) => {
  try {
    const text = req.body.text;
    const user = req.user;
    const tone = await analyzeTone(text);
    const { document_tone: moods } = tone;
    let activities = [];
    const tones = [];
    for (const mood of moods.tones) {
      tones.push(mood.tone_name);
      const forThisTone = await Activity.find({
        moods: mood.tone_name.toLowerCase(),
      });
      forThisTone.length > 0 && activities.push(forThisTone);
    }
    activities = activities.flat();
    const idSet = new Set();
    activities = activities.filter((activity) => {
      if (idSet.has(activity._id.toString())) {
        return false;
      }
      idSet.add(activity._id.toString());
      return true;
    });

    const moodHistory = new MoodHistory({
      userId: user.id,
      text,
      moods: tones,
    });
    const newMoodHistory = await moodHistory.save();

    res.json({
      activities,
      tones,
      moodHistory: newMoodHistory,
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.patch("/mood-history/:id", auth, async (req, res) => {
  try {
    const moodHistory = await MoodHistory.findById(req.params.id);
    moodHistory.activities.push(req.body.activity);
    const updatedMoodHistory = await moodHistory.save();
    res.json({ updatedMoodHistory });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.get("/activities", auth, async (req, res) => {
  try {
    const moodHistory = await MoodHistory.find({
      userId: req.user.id,
    })
      .populate("activities")
      .sort({ date: -1 });
    const activityHistory = moodHistory.map((mood) => {
      return mood.activities.map((activity) => {
        return {
          moods: mood.moods,
          activity,
          date: mood.date,
        };
      });
    });
    res.json({ activityHistory });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
