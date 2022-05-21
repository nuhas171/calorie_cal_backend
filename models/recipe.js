const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: String,
  calorie: String,
  nutrients: {
    CA: String,
    CHOCDF: String,
    CHOLE: String,
    ENERC_KCAL: String,
    FAT: String,
    K: String,
    MG: String,
    NA: String
  },
  image: String,
  user: mongoose.Schema.ObjectId
})

const Recipe = mongoose.model("recipe", recipeSchema)
module.exports = Recipe