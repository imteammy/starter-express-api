let e = require('mongoose'),
  o = require('./t')
exports.ChallengerSkillsSchema = new e.Schema({
  name: o,
  image: o,
  effect: o,
  cooldown: o
})
