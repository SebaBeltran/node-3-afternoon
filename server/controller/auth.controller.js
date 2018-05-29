const users = require("../models/users")

let id = 1;

module.exports = {
  login:(req, res, next)=>{
    let user = users.find(obj => obj.username === req.session.user.username && obj.password === req.session.user.password);
    user !== undefined
      ?(
      req.session.user.username = user.username,
      res.status(200).send(req.session.user)
      )
      :
      res.status(500).send("no")
  },

  register:(req, res, next)=>{
    users.push({
      id: id,
      username: req.body.username,
      password: req.body.password
    })
    id++
    req.session.user.username = req.body.username
    res.status(200).send(req.session.user)
  },

  signout:(req, res, next)=>{
    req.session.destroy()
    res.status(200).send(req.session)
  },

  getUser:(req, res, next)=>{
    res.status(200).send(req.session.user)
  }
}