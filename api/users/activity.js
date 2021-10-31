const express = require("express");
const router = express.Router();
const Activity = require("../../models/Activity");

const analyzeTone = require("../../config/watson");

router.post("/analyze-tone", async (req, res) => {
  try {
    const text = req.body.text;
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
    res.json({ activities, tones });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
