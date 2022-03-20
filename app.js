const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/user");
const morgan = require("morgan");

const app = express();

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

mongoose.connect("mongodb+srv://mostafijur163:6g.mEA_cF4R5A_b@cluster0.ndd3u.mongodb.net/calorie_calculator?retryWrites=true&w=majority").then(() => console.log("database connection successful"))

app.use("/api/user/", userRouter)


app.listen(8000, () => {
   console.log("app running on port 8000");
})