const mongoose = require("mongoose");
let d = require('./d');
exports.itemSchema = new mongoose.Schema({
    name: d,
    image: d,
    effect: d,
    itemPassive: d,
    cooldown: d,
    cost: d,
  });