let e = require('mongoose'),
  o = require('./t')
exports.itemSchema = new e.Schema({
  name: o,
  image: o,
  effect: o,
  itemPassive: o,
  cooldown: o,
  cost: o
})
