const Recipe = require("../models/recipe")

exports.saveRecipe = async (req, res) => {
  const newRecipe = await Recipe.create({...req.body, user: req.user.id})

  res.status(201).json({
    data: newRecipe
  })
}

exports.getRecipe = async (req, res) => {
  const recipe = await Recipe.find({user: req.user.id});

  res.status(200).json({
    data: recipe
  })
}