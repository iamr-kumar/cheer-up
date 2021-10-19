const router = require("express").Router();
const Activity = require("../../models/Activity");

router.post("/new-activity", async (req, res) => {
  const { name, description, imageUrl } = req.body;
  const moods = req.body.moods.split(",");
  try {
    const newActivity = new Activity({ name, description, imageUrl, moods });
    await newActivity.save();
    res.status(200).json(newActivity);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
