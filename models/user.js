const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   confirmPass: {
      type: String,
      required: true
   },
   height: String,
   weight: String,
   age: String,
   role: {
      type: String,
      default: "user"
   }
})

userSchema.pre("save", async function(next) {
   try {
      this.password = await bcrypt.hash(this.password, 10);
      this.confirmPass = undefined
      next()
   } catch (error) {
      next({status: 500, message: "something went wrong"});
   }
})

const User = mongoose.model('user', userSchema);

module.exports = User;