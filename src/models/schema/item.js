const mongoose = require("mongoose");
let d = require('./t');
exports.itemSchema = new mongoose.Schema({
    name: d,
    image: d,
    effect: d,
    itemPassive: d,
    cooldown: d,
    cost: d,
  });