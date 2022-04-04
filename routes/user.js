const express = require("express");
const { signUp, profile, login, saveActivity, getActivity } = require("../controllers/user");
const {authorize} = require("./../middlewares/authorize")

const userRouter = express.Router()

userRouter.post("/sign-up", signUp)
userRouter.post("/login", login)
userRouter.get("/profile", authorize("user"), profile)
userRouter.post("/activity", authorize("user"), saveActivity)
userRouter.get('/activity', authorize("user"), getActivity)

module.exports = userRouter