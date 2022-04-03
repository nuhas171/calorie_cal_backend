const UserModel = require("./../models/user")
const signJwt = require("./../utils/signToken")
const bcrypt = require("bcrypt")
const Activity = require("../models/activity")

exports.signUp = async (req, res) => {
   try {
      const newUser = await UserModel.create(req.body)
      const token = signJwt(newUser)

      res.status(201).json({
         status: "success",
         data: token
      })
   } catch (error) {
      console.log(error);
      res.status(500).json({
         status: "fail",
         message: "something went wrong"
      })
   }
}

exports.login = async (req, res) => {
   try { 
      const user = await UserModel.findOne({email: req.body.email})
      if(!user) {
         return res.status(401)
      } else if(user) {
         const checkPass = await bcrypt.compare(req.body.password, user.password)
         if (checkPass) {
            return res.status(200).json({
               status: "success",
               data: signJwt(user)
            })
         }
      } else {   
         return res.status(401).json({
            status: "fail",
            message: "wrong creadential"
         })
      }
   } catch (error) {
      console.log(error)
      return res.status(500).json({
         status: "fail",
         message: "something went wrong"
      })
   }
}

exports.profile = async (req, res) => {
   try {
      const user = await UserModel.findById(req.user.id);
      if(user) {
         return res.status(200).json({
            status: "success",
            data: user
         }) 
      } else {
         return res.status(401).json({
            status: "fail",
            message: "Unauthorized"
         })
      }
   } catch (error) {
      res.status(500).json({
         status: "fail",
         message: "something went wrong"
      })
   }
}

exports.saveActivity = async (req, res) => {
   try {
      const newActivity = await Activity.create({
         user: req.user.id,
         ...req.body
      })
      res.status(201).json({
         status: "success",
         data: newActivity
      })
   } catch (error) {
      res.status(500).json({
         status: "fail",
         message: "something went wrong"
      })
   }
   
}