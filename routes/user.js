const express = require("express");
const { signUp, profile, login } = require("../controllers/user");
const {authorize} = require("./../middlewares/authorize")

const userRouter = express.Router()

userRouter.post("/sign-up", signUp)
userRouter.post("/login", login)
userRouter.get("/profile", authorize("user"), profile)

module.exports = userRouter