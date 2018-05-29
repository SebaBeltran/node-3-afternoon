const swags = require("../models/swag")

module.exports = {
  add: (req, res, next) =>{
    let swag = swags.find(obj => obj.id === req.query.id)
      if(swag === undefined){
        req.session.user.cart.push(swag)
        req.session.user.total += swag.price
      }
    res.status(200).send(req.session.user)
  },

  delete: (req, res, next) =>{
    let swag = req.session.user.cart.find(obj => obj.id === req.query.id)
    if(swag !== undefined){
      let index = req.session.user.cart.findIndexOf(swag)
      req.session.user.cart.splice(index, 1)
      req.session.user.price -= swag.price 
    }
    res.status(200).send(req.session.user)
  },

  checkout: (req, res, next) =>{
    req.session.user.cart = []
    req.session.user.total = 0
    res.status(200).send(req.session.user)
  }

}