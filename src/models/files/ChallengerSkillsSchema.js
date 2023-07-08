const mongoose = require('mongoose');
let d = require('./d');
exports.ChallengerSkillsSchema = new mongoose.Schema({
    name: d,
    image: d,
    effect: d,
    cooldown: d,
  });