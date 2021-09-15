const express = require("express");
const { Query } = require("mongoose");
const router = express.Router();
const User = require("../models/userModel");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.send(users);
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

router.put("/:id", async (req, res) => {
  try {
 const updatedUser = await User.updateOne({ _id: req.params.id }, { $set: { name: req.body.name, dob: req.body.dob, gender: req.body.gender}})
  res.send(updatedUser)
  } catch (error) {
    res.json({ message: error});
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.id });
    res.send(removedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
