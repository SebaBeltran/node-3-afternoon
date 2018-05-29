const users = require("../models/users")

let id = 1;

module.exports = {
  login:(req, res, next)=>{},
  register:(req, res, next)=>{
    users.push({
      id: id,
      username: req.body.username,
      password: req.body.password
    })
    id++
    res.status(200).send(req.session.users)
    next()
  },
  signout:(req, res, next)=>{},
  getUser:(req, res, next)=>{}
}