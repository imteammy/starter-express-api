const mongoose = require('mongoose');

exports.ChallengerSkillsSchema = new mongoose.Schema({
    name: { type: String, default: "null" },
    image: { type: String, default: "null" },
    effect: { type: String, default: "null" },
    cooldown: { type: String, default: "null" },
  });