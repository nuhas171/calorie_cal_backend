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

userSchema.methods.comparePass = async function(userPass, savedPass) {
   return await bcrypt.compare(userPass, savedPass);
}

const User = mongoose.model('user', userSchema);

module.exports = User;