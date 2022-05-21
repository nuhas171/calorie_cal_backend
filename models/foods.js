const mongoose = require("mongoose");

const foodsSchema = new mongoose.Schema({
  breakfast: [],
  lunch: [],
  dinner: [],
  others: [],
  day: String,
  user: mongoose.Schema.ObjectId,
})

const foodModel = mongoose.model("foods", foodsSchema)

module.exports = foodModel;

