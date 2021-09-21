const express = require("express");
const router = express.Router();

const analyzeTone = require("../../config/watson");

router.post("/analyze-tone", async (req, res) => {
  try {
    const text = req.body.text;
    const response = await analyzeTone(text);
    res.json(response);
  } catch (err) {
    console.log(err);
    res.send("Error!");
  }
});

module.exports = router;
