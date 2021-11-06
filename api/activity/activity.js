const router = require("express").Router();
const Activity = require("../../models/Activity");

router.get("/all", async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    console.log(err);
    res.send("Error!");
  }
});

router.post("/new-activity", async (req, res) => {
  const { name, description, imageUrl, detail } = req.body;
  const moods = req.body.moods.split(",").map((mood) => mood.trim());
  try {
    const newActivity = new Activity({
      name,
      description,
      imageUrl,
      moods,
      detail,
    });
    await newActivity.save();
    res.status(200).json(newActivity);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
