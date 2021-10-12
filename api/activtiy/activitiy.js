const Activity = require("../../models/Activity");

const router = require("express").Router();

// create activtiy
router.post("/create", async (req, res) => {
  try {
    const newActivity = new Activitiy(req.body);
    await newActivity.save();
    res.status(200).json(newActivity);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// get all activities
router.get("/all", async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// get activity by id
router.get("/:id", async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    res.status(200).json(activity);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});
