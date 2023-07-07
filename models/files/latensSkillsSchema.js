const mongoose = require('mongoose');
exports.latensSkillsSchema = new mongoose.Schema({
    name: { type: String, default: "null" },
    image: { type: String, default: "null" },
    effect: { type: String, default: "null" },
    color: { type: String, default: "null" },
  });