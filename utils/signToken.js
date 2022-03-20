const jwt = require("jsonwebtoken")

module.exports = function signToken(user) {
   return jwt.sign({id: user._id, role: user.role}, "jsjsidd2843dmsHU#(@@)SJSUWNS2")
}