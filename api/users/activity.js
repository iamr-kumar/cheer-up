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
    console.log(user);
    const tone = await analyzeTone(text);
    const { document_tone: moods } = tone;
    const activities = [];
    const tones = [];
    for (const mood of moods.tones) {
      tones.push(mood.tone_name);
      const forThisTone = await Activity.findOne({
        moods: mood.tone_name.toLowerCase(),
      });
      forThisTone && activities.push(forThisTone);
    }
    // const moodHistory = new MoodHistory({
    //   userId: user.id,
    //   text,
    //   moods: tones,
    // });
    // const newMoodHistory = await moodHistory.save();
    res.json({ activities, tones });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
