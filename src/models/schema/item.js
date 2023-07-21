const { Schema } = require("mongoose");
let d = require('./t');
exports.itemSchema = new Schema({
  name: d,
  image: d,
  effect: d,
  itemPassive: d,
  cooldown: d,
  cost: d,
});