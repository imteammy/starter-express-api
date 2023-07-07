const mongoose = require("mongoose");

exports.itemSchema = new mongoose.Schema({
    name: { type: String, default: "null" },
    image: { type: String, default: "null" },
    effect: { type: String, default: "null" },
    itemPassive: { type: String, default: "null" },
    cooldown: { type: String, default: "null" },
    cost: { type: String, default: "null" },
  });