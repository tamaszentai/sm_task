const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  dob: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Users", UserSchema);
