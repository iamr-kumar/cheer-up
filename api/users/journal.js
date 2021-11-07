const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const analyzeTone = require("../../config/watson");
const Journal = require("../../models/Journal");

router.post("/new", auth, async (req, res) => {
  try {
    const text = req.body.text;
    const user = req.user;
    const tone = await analyzeTone(text);
    const { document_tone: moods } = tone;

    const tones = [];
    for (const mood of moods.tones) {
      tones.push(mood.tone_name);
    }

    const journal = new Journal({
      userId: user.id,
      text,
      moods: tones,
    });

    res.json({
      journal,
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.get("/all/:id", async (req, res) => {
  try {
    const journals = await Journal.find({ userId: req.params.id });
    res.json({ journals });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
