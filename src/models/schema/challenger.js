const mongoose = require('mongoose');
let d = require('./t');
exports.ChallengerSkillsSchema = new mongoose.Schema({
    name: d,
    image: d,
    effect: d,
    cooldown: d,
  });