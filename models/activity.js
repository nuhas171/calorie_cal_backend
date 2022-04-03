const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  total: String,
  age: String,
  weight: String,
  height: String,
  name: String,
  activity: String,
  gender: String,
});

const Activity = mongoose.model("activity", activitySchema);

module.exports = Activity;
