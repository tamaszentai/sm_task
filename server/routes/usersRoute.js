const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    dob: req.body.dob,
    gender: req.body.gender,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
