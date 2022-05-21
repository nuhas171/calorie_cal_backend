const express = require("express");
const { signUp, profile, login, saveActivity, getActivity } = require("../controllers/user");
const {authorize} = require("./../middlewares/authorize")
const {foodController, myFoods} = require("./../controllers/food")
const {saveRecipe, getRecipe} = require("./../controllers/recipe")

const userRouter = express.Router()

userRouter.post("/sign-up", signUp)
userRouter.post("/login", login)
userRouter.get("/profile", authorize("user"), profile)
userRouter.post("/activity", authorize("user"), saveActivity)
userRouter.get('/activity', authorize("user"), getActivity)
userRouter.post('/save-food', authorize("user"), foodController)
userRouter.get("/my-foods", authorize("user"), myFoods)
userRouter.post("/save-recipe", authorize("user"), saveRecipe)
userRouter.get("/get-recipe", authorize("user"), getRecipe)

module.exports = userRouter