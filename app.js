const express = require("express");
const uri = require('./utils/mongoConfig');
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/user");
const morgan = require("morgan");

const app = express();

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

mongoose.connect(uri).then(() => console.log("database connection successful"))

app.use("/api/user/", userRouter)


app.listen(8000, () => {
   console.log("app running on port 8000");
})