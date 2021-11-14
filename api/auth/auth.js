const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
// const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const UserProfile = require("./../../models/UserProfile");
const TherapistProfile = require("./../../models/TherapistProfile");
const ChatModel = require("../../models/ChatModel");

// @route GET api/auth
// @desc test route
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    // console.log(req.user.id);
    const user = await User.findById(req.user.id).select("-password");
    let profile;
    if (user.category === "user") {
      profile = await UserProfile.findOne({ user: req.user.id });
    } else {
      profile = await TherapistProfile.findOne({ user: req.user.id });
    }
    // console.log(user);
    res.json({ user, profile });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route POST api/auth
// @desc Authenticate user and get token
// @access Public
router.post(
  "/",
  [
    check("email", "Enter a valid email").isEmail(),
    check("password", "password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const isMatched = await bcrypt.compare(password, user.password);

      if (!isMatched) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const chatModel = await ChatModel.findOne({ user: user._id });
      if (!chatModel) {
        await new ChatModel({ user: user._id, chats: [] }).save();
      }

      const payload = {
        user: {
          id: user.id,
          category: user.category,
        },
      };

      // Return jsonwebtoken
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) {
            throw err;
          } else {
            console.log(token);
            return res.json({ token });
          }
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error!");
    }
  }
);

module.exports = router;
