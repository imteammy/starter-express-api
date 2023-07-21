const { Schema } = require('mongoose');
let d = require('./t');
exports.ChallengerSkillsSchema = new Schema({
  name: d,
  image: d,
  effect: d,
  cooldown: d,
});