const router = require("express").Router();
const auth = require("../../middleware/auth");
const Request = require("../../models/Request");
const UserProfile = require("../../models/UserProfile");
const TherapistProfile = require("../../models/TherapistProfile");
const mongoose = require("mongoose");

router.get("/pending", auth, async (req, res) => {
  const user = req.user;

  try {
    const profile = await TherapistProfile.findOne({
      user: user.id,
    });
    const pendingRequests = await Request.find({
      therapist: profile._id,
      status: "pending",
    })
      .populate({
        path: "user",
        model: "UserProfile",
        populate: {
          path: "user",
          model: "user",
          select: "-password",
        },
      })

      .select("-password");
    res.json({ pendingRequests });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.patch("/accept/:id", auth, async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ msg: "Request not found" });
    }
    await TherapistProfile.findByIdAndUpdate(request.therapist, {
      $push: { client: request.user._id },
    });
    await UserProfile.findByIdAndUpdate(request.user, {
      therapist: request.therapist._id,
    });
    await Request.findByIdAndUpdate(req.params.id, {
      status: "accepted",
    });
    res.json({ message: "Client added successfully!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.patch("/reject/:id", auth, async (req, res) => {
  try {
    await Request.findByIdAndUpdate(req.params.id, {
      status: "rejected",
    });
    res.json({ message: "Request rejected!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
