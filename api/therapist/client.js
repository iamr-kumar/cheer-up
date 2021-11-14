const TherapistProfile = require("../../models/TherapistProfile");

const router = require("express").Router();
const auth = require("../../middleware/auth");

// Get Client List
router.get("/", auth, async (req, res) => {
  try {
    const therapist = await TherapistProfile.findOne({
      user: req.user.id,
    }).populate({
      path: "client",
      model: "UserProfile",
      populate: {
        path: "user",
        model: "user",
        select: "-password",
      },
    });
    if (!therapist) {
      return res
        .status(400)
        .json({ msg: "There is no therapist profile for this user" });
    }
    res.json({ therapist });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
