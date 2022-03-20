const jwt = require("jsonwebtoken")

exports.authorize = (...roles) => {

  return function(req, res, next) {
    const authHeader = req.get("Authorization");
    if(authHeader) {
      const token = authHeader.split(" ")[1];
      const decodedUser = jwt.decode(token);
      if(roles.includes(decodedUser.role)) {
        req.user = decodedUser;
        return next()
      }
    } else {
      return res.status(401).json({
        status: "fail",
        message: "Unauthorized"
      })
    }
  }
}